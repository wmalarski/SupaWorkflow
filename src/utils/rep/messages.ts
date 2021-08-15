import { nanoid } from "nanoid";
import { useCallback } from "react";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { useSubscribe } from "replicache-react";
import { UpsertMessageArgs } from "../../services/data/message/upsertMessages";
import { Message } from "../../services/types";
import { useRepContext } from "./RepContext";

export const useMessages = (): Message[] => {
  const rep = useRepContext();

  return useSubscribe<Message[]>(
    rep,
    async (tx) => {
      const list = await tx.scan({ prefix: "message/" }).entries().toArray();
      return list.map(([, message]) => message as Message);
    },
    []
  );
};

export type UseCreateMessageArgs = Omit<
  Required<UpsertMessageArgs>,
  "id" | "deleted" | "version"
>;

export const useCreateMessage = (
  options?: UseMutationOptions<void, Error, UseCreateMessageArgs>
): UseMutationResult<void, Error, UseCreateMessageArgs> => {
  const rep = useRepContext();

  const mutation = useCallback(
    (args: UseCreateMessageArgs) =>
      rep.mutate.createMessage({
        ...args,
        id: nanoid(),
        deleted: false,
      }),
    [rep]
  );

  return useMutation(mutation, options);
};
