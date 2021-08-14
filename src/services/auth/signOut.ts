import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../supabase";

export const signOut = async (): Promise<void> => {
  const { error } = await supabase.auth.signOut();

  if (error) throw error;

  return;
};

export const useSignOut = (
  options?: UseMutationOptions<void, PostgrestError, void>
): UseMutationResult<void, PostgrestError, void> =>
  useMutation(signOut, options);
