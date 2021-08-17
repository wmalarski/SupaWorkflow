import { WriteTransaction } from "replicache";
import { Message } from "../../services/types";
import repKeys from "./repKeys";

const mutators = {
  putMessage: (
    tx: WriteTransaction,
    args: Omit<Message, "deleted" | "version">
  ): void => {
    tx.put(repKeys.message(args.id), args);
  },
  deleteMessage: (
    tx: WriteTransaction,
    args: Omit<Message, "deleted" | "version">
  ): void => {
    tx.del(repKeys.message(args.id));
  },
};

export default mutators;
