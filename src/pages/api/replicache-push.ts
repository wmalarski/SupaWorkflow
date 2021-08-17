import type { NextApiRequest, NextApiResponse } from "next";
import selectOrInsertClient from "../../services/data/client/selectOrInsertClient";
import { updateClient } from "../../services/data/client/updateClient";
import {
  UpsertMessageArgs,
  upsertMessages,
} from "../../services/data/message/upsertMessages";
import resolvePush from "../../utils/rep/resolvePush";
import { Mutation, MutationPush } from "../../utils/rep/types";

type ReduceAcc = {
  mutationId: number;
  mutations: UpsertMessageArgs[];
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

  const args = resolvePush(mutation);

  if (!args) return prev;

  return {
    mutationId: expectedMutationID,
    mutations: [...mutations, args],
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

    await upsertMessages(mutations);

    await updateClient({
      id: push.clientID,
      last_mutation_id: mutationId,
    });
  } catch (error) {
    console.log({ error });
  }
  res.json({});
};

export default handler;
