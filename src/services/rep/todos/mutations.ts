import { WriteTransaction } from "replicache";
import { DeleteMessageArgs } from "../../data/message/deleteMessage";
import { InsertMessageArgs } from "../../data/message/insertMessage";

export const createMessage = (
  tx: WriteTransaction,
  args: InsertMessageArgs
): void => {
  tx.put(`/message/${args.id}`, args);
};

export const deleteMessage = (
  tx: WriteTransaction,
  args: DeleteMessageArgs
): void => {
  tx.del(`/message/${args.id}`);
};
