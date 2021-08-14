import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type InsertMessageArgs = Message;

export const insertMessage = async (
  args: InsertMessageArgs
): Promise<Message> => {
  const { data, error } = await fromSupabase("message").insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useInsertMessage = (
  options?: UseMutationOptions<Message, PostgrestError, InsertMessageArgs>
): UseMutationResult<Message, PostgrestError, InsertMessageArgs> =>
  useMutation(insertMessage, options);
