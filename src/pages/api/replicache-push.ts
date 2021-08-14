import type { NextApiRequest, NextApiResponse } from "next";
import selectOrInsertClient from "../../services/data/client/selectOrInsertClient";
import { updateClient } from "../../services/data/client/updateClient";
import { Mutation } from "../../services/rep/mutators";
import resolve from "../../services/rep/resolve";

type Push = {
  clientID: string;
  mutations: Mutation[];
};

const sequence = (tasks: Promise<void>[]): Promise<void> => {
  return tasks.reduce(
    (promise, task) => promise.then(() => task),
    Promise.resolve()
  );
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const push: Push = req.body;
  console.log("Processing push", JSON.stringify(push));

  try {
    const { last_mutation_id } = await selectOrInsertClient(push.clientID);

    const { mutationId, mutations } = push.mutations.reduce<{
      mutationId: number;
      mutations: Promise<void>[];
    }>(
      (prev, mutation) => {
        const { mutationId, mutations } = prev;
        const expectedMutationID = mutationId + 1;

        if (mutation.id < expectedMutationID) {
          console.log(
            `Mutation ${mutation.id} has already been processed - skipping`
          );
          return prev;
        }

        if (mutation.id > expectedMutationID) {
          console.warn(`Mutation ${mutation.id} is from the future - aborting`);
          return prev;
        }

        console.log("Processing mutation:", JSON.stringify(mutation));
        return {
          mutationId: expectedMutationID,
          mutations: [...mutations, resolve(mutation)],
        };
      },
      { mutationId: last_mutation_id, mutations: [] }
    );

    await sequence(mutations);
    // await sendPoke();
    await updateClient({ id: push.clientID, last_mutation_id: mutationId });
  } catch (error: any) {
    console.log({ error });
  }
  res.send("{}");
};

// async function sendPoke() {
//   // TODO
// }

export default handler;
