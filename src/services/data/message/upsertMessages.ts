import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type UpsertMessageArgs = Pick<Message, "id"> & Partial<Message>;

export type UpsertMessagesArgs = UpsertMessageArgs | UpsertMessageArgs[];

export const upsertMessages = async (
  args: UpsertMessagesArgs
): Promise<Message[]> => {
  const { data, error } = await fromSupabase("message").upsert(args);

  if (error) throw error;

  return data ?? [];
};
