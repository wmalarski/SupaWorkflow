import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectMessagesArgs = {
  updatedAt?: string;
};

export const selectMessages = async ({
  updatedAt,
}: SelectMessagesArgs): Promise<Message[]> => {
  const builder = fromSupabase("message").select("*");

  const { data, error } = await (updatedAt
    ? builder.gt("updated_at", updatedAt)
    : builder);

  if (error) throw error;

  return data ?? [];
};
