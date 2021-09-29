import { PatchOperation } from "replicache";
import { Message } from "services";
import repKeys from "./repKeys";

const resolvePull = (message: Message): PatchOperation => {
  const key = repKeys.message({
    id: message.id,
    templateId: message.template_id,
    workflowId: message.workflow_id,
  });

  if (message.deleted) return { op: "del", key };
  return { op: "put", key, value: message };
};

export default resolvePull;
