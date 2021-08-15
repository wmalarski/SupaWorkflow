import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectMessagesArgs = {
  version: number;
};

export const selectMessages = async ({
  version,
}: SelectMessagesArgs): Promise<Message[]> => {
  const { data, error } = await fromSupabase("message")
    .select("*")
    .gt("version", version);

  if (error) throw error;

  return data ?? [];
};
