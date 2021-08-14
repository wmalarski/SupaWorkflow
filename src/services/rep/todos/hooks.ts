import { nanoid } from "nanoid";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { JSONValue } from "replicache";
import { useSubscribe } from "replicache-react";
import { InsertMessageArgs } from "../../data/message/insertMessage";
import rep from "../rep";

export const useMessages = (): JSONValue[] =>
  useSubscribe(
    rep,
    async (tx) => {
      const list = await tx.scan({ prefix: "message/" }).entries().toArray();
      console.log("list", list);
      return list;
    },
    []
  );

export type UseCreateMessageArgs = Omit<InsertMessageArgs, "id">;

export const createMessageMutation = (
  args: UseCreateMessageArgs
): Promise<void> => rep.mutate.createMessage({ ...args, id: nanoid() });

export const useCreateMessage = (
  options?: UseMutationOptions<void, Error, UseCreateMessageArgs>
): UseMutationResult<void, Error, UseCreateMessageArgs> =>
  useMutation(createMessageMutation, options);
