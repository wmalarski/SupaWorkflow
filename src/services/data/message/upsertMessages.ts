import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type UpsertMessageArgs = Omit<Message, "updated_at">;

export type UpsertMessagesArgs = UpsertMessageArgs | UpsertMessageArgs[];

export const upsertMessages = async (
  args: UpsertMessagesArgs
): Promise<Message[]> => {
  const { data, error } = await fromSupabase("message").upsert(args);

  console.log("upsertMessages", error);

  if (error) throw error;

  return data ?? [];
};
