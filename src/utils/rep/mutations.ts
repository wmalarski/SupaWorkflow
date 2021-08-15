import { WriteTransaction } from "replicache";
import { DeleteMessageArgs } from "../../services/data/message/deleteMessage";
import { InsertMessageArgs } from "../../services/data/message/insertMessage";

const mutators = {
  createMessage: (tx: WriteTransaction, args: InsertMessageArgs): void => {
    tx.put(`/message/${args.id}`, args);
  },
  deleteMessage: (tx: WriteTransaction, args: DeleteMessageArgs): void => {
    tx.del(`/message/${args.id}`);
  },
};

export default mutators;
