import { PostgrestError, User, UserCredentials } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../supabase";

export const signIn = async (args: UserCredentials): Promise<User> => {
  const { error, user, data, session, provider, url } =
    await supabase.auth.signIn(args);

  console.log({ error, user, data, session, provider, url });

  if (error || !user) throw error;

  return user;
};

export const useSignIn = (
  options?: UseMutationOptions<User, PostgrestError, UserCredentials>
): UseMutationResult<User, PostgrestError, UserCredentials> =>
  useMutation(signIn, options);
