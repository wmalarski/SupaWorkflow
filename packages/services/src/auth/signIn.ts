import { PostgrestError, User, UserCredentials } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../supabase";

export const signIn = async (args: UserCredentials): Promise<User | null> => {
  const { error, user } = await supabase.auth.signIn(args);

  if (error) throw error;

  return user;
};

export const useSignIn = (
  options?: UseMutationOptions<User | null, PostgrestError, UserCredentials>
): UseMutationResult<User | null, PostgrestError, UserCredentials> =>
  useMutation(signIn, options);
