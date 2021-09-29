import { PatchOperation, PullResponse } from "replicache";
import { Message, selectClient, selectMessages } from "services";
import repKeys from "./repKeys";

const resolvePullMessage = (message: Message): PatchOperation => {
  const key = repKeys.message({
    id: message.id,
    templateId: message.template_id,
    workflowId: message.workflow_id,
  });

  if (message.deleted) return { op: "del", key };
  return { op: "put", key, value: message };
};

export type ResolvePullOptions = {
  clientId: string;
  cookie: string;
  templateId: number;
  workflowId: number | null;
};

const resolvePull = async ({
  clientId,
  cookie,
  templateId,
  workflowId,
}: ResolvePullOptions): Promise<PullResponse> => {
  const [client, changed] = await Promise.all([
    selectClient({ id: clientId }),
    selectMessages({ updatedAt: cookie, templateId, workflowId }),
  ]);

  const newCookie = new Date().toISOString();
  const lastMutationID = client?.last_mutation_id ?? 0;

  console.log({ changed, newCookie });

  const patch = [
    ...(!cookie ? [{ op: "clear" } as const] : []),
    ...changed.map(resolvePullMessage),
  ];

  const response: PullResponse = {
    cookie: newCookie,
    lastMutationID,
    patch,
  };

  return response;
};

export default resolvePull;
