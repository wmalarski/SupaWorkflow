import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectMessagesArgs = {
  templateId: number;
  workflowId: number | null;
  updatedAt?: string;
  deleted?: boolean;
};

export const selectMessages = async ({
  templateId,
  workflowId,
  updatedAt,
  deleted,
}: SelectMessagesArgs): Promise<Message[]> => {
  const builder = fromSupabase("message")
    .select("*")
    .eq("template_id", templateId);

  const updatedAtBuilder = updatedAt
    ? builder.gt("updated_at", updatedAt)
    : builder;

  const workflowBuilder = workflowId
    ? updatedAtBuilder.eq("workflow_id", workflowId)
    : updatedAtBuilder;

  const deletedBuilder =
    deleted === true || deleted === false
      ? workflowBuilder.eq("deleted", deleted)
      : workflowBuilder;

  const { data, error } = await deletedBuilder;

  if (error) throw error;

  return data ?? [];
};
