import { WriteTransaction } from "replicache";
import { InsertMessageArgs } from "../../data/message/insertMessage";

export const createTodo = (
  tx: WriteTransaction,
  args: InsertMessageArgs
): void => {
  tx.put(`/message/${args.id}`, args);
};

export type RemoveTodoArgs = {
  id: string;
};

export const removeTodo = (
  tx: WriteTransaction,
  args: RemoveTodoArgs
): void => {
  tx.del(`/message/${args.id}`);
};
