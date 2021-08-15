import { nanoid } from "nanoid";
import { useCallback } from "react";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { JSONValue } from "replicache";
import { useSubscribe } from "replicache-react";
import { useRepContext } from "../../utils/rep/RepContext";
import { InsertMessageArgs } from "../data/message/insertMessage";

export const useMessages = (): JSONValue[] => {
  const rep = useRepContext();

  return useSubscribe(
    rep,
    async (tx) => {
      const list = await tx.scan({ prefix: "message/" }).entries().toArray();
      console.log("list", list);
      return list;
    },
    []
  );
};

export type UseCreateMessageArgs = Omit<InsertMessageArgs, "id">;

export const useCreateMessage = (
  options?: UseMutationOptions<void, Error, UseCreateMessageArgs>
): UseMutationResult<void, Error, UseCreateMessageArgs> => {
  const rep = useRepContext();

  const mutation = useCallback(
    (args: UseCreateMessageArgs) => {
      console.log("rep.mutate.createMessage", args, rep);
      return rep.mutate.createMessage({ ...args, id: nanoid() });
    },
    [rep]
  );

  return useMutation(mutation, options);
};
