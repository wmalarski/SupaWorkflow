import { WriteTransaction } from "replicache";
import { Message } from "../../services/types";

const mutators = {
  createMessage: (
    tx: WriteTransaction,
    args: Omit<Message, "deleted" | "version">
  ): void => {
    tx.put(`/message/${args.id}`, args);
  },
  deleteMessage: (tx: WriteTransaction, args: Pick<Message, "id">): void => {
    tx.del(`/message/${args.id}`);
  },
};

export default mutators;
