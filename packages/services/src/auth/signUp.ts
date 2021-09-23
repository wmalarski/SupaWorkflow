import { PostgrestError, User, UserCredentials } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../supabase";

export const signUp = async (args: UserCredentials): Promise<User> => {
  const { error, user } = await supabase.auth.signUp(args);

  if (error || !user) throw error;

  return user;
};

export const useSignUp = (
  options?: UseMutationOptions<User, PostgrestError, UserCredentials>
): UseMutationResult<User, PostgrestError, UserCredentials> =>
  useMutation(signUp, options);
