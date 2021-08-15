import { Message } from "../../services/types";

export type ResolvePullResult =
  | {
      op: "del";
      key: string;
    }
  | {
      op: "put";
      key: string;
      value: Message;
    };

const resolvePull = (message: Message): ResolvePullResult => {
  const key = `message/${message.id}`;

  if (message.deleted) return { op: "del", key };
  return { op: "put", key, value: message };
};

export default resolvePull;
