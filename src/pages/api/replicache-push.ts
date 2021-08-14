import type { NextApiRequest, NextApiResponse } from "next";
import selectOrInsertClient from "../../services/data/client/selectOrInsertClient";
import { updateClient } from "../../services/data/client/updateClient";
import { Mutation, MutationPush } from "../../services/rep/mutators";
import resolve from "../../services/rep/resolve";
import resolveSequence from "../../services/utils/resolveSequence";

type ReduceAcc = {
  mutationId: number;
  mutations: Promise<void>[];
};

const reducer: (prev: ReduceAcc, mutation: Mutation) => ReduceAcc = (
  prev,
  mutation
) => {
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
};

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const push: MutationPush = req.body;
  console.log("Processing push", JSON.stringify(push));

  try {
    const { last_mutation_id } = await selectOrInsertClient(push.clientID);

    const { mutationId, mutations } = push.mutations.reduce(reducer, {
      mutationId: last_mutation_id,
      mutations: [],
    });

    await resolveSequence(mutations);
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
