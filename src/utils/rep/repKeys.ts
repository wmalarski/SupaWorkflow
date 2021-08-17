const messages = ({
  templateId,
  workflowId,
}: {
  templateId: number;
  workflowId?: number | null;
}): string => `message/${templateId}/${workflowId ?? "definitions"}`;

const message = ({
  id,
  templateId,
  workflowId,
}: {
  templateId: number;
  workflowId?: number | null;
  id: string;
}): string => `${messages({ templateId, workflowId })}/${id}`;

const repKeys = { message, messages };

export default repKeys;
