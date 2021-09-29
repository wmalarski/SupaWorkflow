import fromSupabase from "../../helpers/fromSupabase";
import { Message } from "../../types";

export type UpsertMessageArgs = Omit<Message, "updated_at">;

export type UpsertMessagesArgs = UpsertMessageArgs | UpsertMessageArgs[];

export const upsertMessages = async (
  args: UpsertMessagesArgs
): Promise<Message[]> => {
  const { data, error } = await fromSupabase("message").upsert(args);

  if (error) throw error;

  return data ?? [];
};
