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

export const useTodos = (): JSONValue[] =>
  useSubscribe(
    rep,
    async (tx) => {
      const list = await tx.scan({ prefix: "message/" }).entries().toArray();
      console.log("list", list);
      return list;
    },
    []
  );

export type UseCreateTodoArgs = Omit<InsertMessageArgs, "id">;

export const createTodoMutation = (args: UseCreateTodoArgs): Promise<void> =>
  rep.mutate.createTodo({ ...args, id: nanoid() });

export const useCreateTodo = (
  options?: UseMutationOptions<void, Error, UseCreateTodoArgs>
): UseMutationResult<void, Error, UseCreateTodoArgs> =>
  useMutation(createTodoMutation, options);
