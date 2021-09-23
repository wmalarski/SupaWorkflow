import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { Profile } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectProfileKey } from "./selectProfile";

export type UpdateProfileArgs = Pick<Profile, "id" | "name">;

export const updateProfile = async ({
  id,
  name,
}: UpdateProfileArgs): Promise<Profile> => {
  const { data, error } = await fromSupabase("profile")
    .update({ id, name })
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateProfile = (
  options?: UseMutationOptions<Profile, PostgrestError, UpdateProfileArgs>
): UseMutationResult<Profile, PostgrestError, UpdateProfileArgs> => {
  const queryClient = useQueryClient();

  return useMutation(updateProfile, {
    ...options,
    onSuccess: (item, ...args) => {
      queryClient.invalidateQueries(selectProfileKey({ userId: item.user_id }));
      options?.onSuccess?.(item, ...args);
    },
  });
};
