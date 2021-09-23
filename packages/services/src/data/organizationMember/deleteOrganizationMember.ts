import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { OrganizationMember } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectAllMembersKey } from "../members/selectMembers";

export type DeleteOrganizationMemberArgs = Pick<OrganizationMember, "id">;

export const deleteOrganizationMember = async ({
  id,
}: DeleteOrganizationMemberArgs): Promise<void> => {
  const { error } = await fromSupabase("organizationMember")
    .delete()
    .eq("id", id)
    .single();

  if (error) throw error;
};

export const useDeleteOrganizationMember = (
  options?: UseMutationOptions<
    void,
    PostgrestError,
    DeleteOrganizationMemberArgs
  >
): UseMutationResult<void, PostgrestError, DeleteOrganizationMemberArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteOrganizationMember, {
    ...options,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(selectAllMembersKey());
      options?.onSuccess?.(...args);
    },
  });
};
