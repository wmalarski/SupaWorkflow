import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type InsertMessageArgs = Omit<Message, "version">;

export const insertMessage = async (
  args: InsertMessageArgs
): Promise<Message> => {
  const { data, error } = await fromSupabase("message").insert(args).single();

  if (error || !data) throw error;

  return data;
};
