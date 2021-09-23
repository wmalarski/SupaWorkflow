import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { TeamMember } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectAllTeamMembersKey } from "./selectTeamMembers";

export type DeleteTeamMemberArgs = Pick<TeamMember, "id">;

export const deleteTeamMember = async ({
  id,
}: DeleteTeamMemberArgs): Promise<void> => {
  const { error } = await fromSupabase("teamMember")
    .delete()
    .eq("id", id)
    .single();

  if (error) throw error;
};

export const useDeleteTeamMember = (
  options?: UseMutationOptions<void, PostgrestError, DeleteTeamMemberArgs>
): UseMutationResult<void, PostgrestError, DeleteTeamMemberArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteTeamMember, {
    ...options,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(selectAllTeamMembersKey());
      options?.onSuccess?.(...args);
    },
  });
};
