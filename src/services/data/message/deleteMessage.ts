import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type DeleteMessageArgs = Pick<Message, "id">;

export const deleteMessage = async ({
  id,
}: DeleteMessageArgs): Promise<void> => {
  const { error } = await fromSupabase("message")
    .delete()
    .eq("id", id)
    .single();

  if (error) throw error;
};

export const useDeleteMessage = (
  options?: UseMutationOptions<void, PostgrestError, DeleteMessageArgs>
): UseMutationResult<void, PostgrestError, DeleteMessageArgs> =>
  useMutation(deleteMessage, options);
