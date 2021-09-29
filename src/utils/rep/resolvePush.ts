import {
  selectOrInsertClient,
  updateClient,
  UpsertMessageArgs,
  upsertMessages,
} from "services";
import { Mutation } from "utils/rep/types";

const resolvePushMutation = (mutation: Mutation): UpsertMessageArgs => {
  switch (mutation.name) {
    case "putMessage":
      return { deleted: false, ...mutation.args };
    case "delMessage":
      return { deleted: true, ...mutation.args };
  }
};

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

  const args = resolvePushMutation(mutation);

  if (!args) return prev;

  return {
    mutationId: expectedMutationID,
    mutations: [...mutations, args],
  };
};

export type ResolvePushOptions = {
  clientId: string;
  pushMutations: Mutation[];
};

const resolvePush = async ({
  clientId,
  pushMutations,
}: ResolvePushOptions): Promise<void> => {
  const { last_mutation_id } = await selectOrInsertClient(clientId);

  const { mutationId, mutations } = pushMutations.reduce(reducer, {
    mutationId: last_mutation_id,
    mutations: [],
  });

  const uniqueMutations = Object.values(
    mutations.reduce<Record<string, UpsertMessageArgs>>(
      (prev, mutation) => ({ ...prev, [mutation.id]: mutation }),
      {}
    )
  );

  await upsertMessages(uniqueMutations);

  await updateClient({
    id: clientId,
    last_mutation_id: mutationId,
  });
};

export default resolvePush;
