import { PostgrestError, User, UserCredentials } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../supabase";

export const signIn = async (args: UserCredentials): Promise<User> => {
  const { error, user } = await supabase.auth.signIn(args);

  if (error || !user) throw error;

  return user;
};

export const useSignIn = (
  options?: UseMutationOptions<User, PostgrestError, UserCredentials>
): UseMutationResult<User, PostgrestError, UserCredentials> =>
  useMutation(signIn, options);
