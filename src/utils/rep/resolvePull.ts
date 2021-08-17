import { PatchOperation } from "replicache";
import { Message } from "../../services/types";
import repKeys from "./repKeys";

const resolvePull = (message: Message): PatchOperation => {
  const key = repKeys.message(message.id);

  if (message.deleted) return { op: "del", key };
  return { op: "put", key, value: message };
};

export default resolvePull;
