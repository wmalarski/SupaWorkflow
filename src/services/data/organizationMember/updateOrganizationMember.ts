import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { useProfileContext } from "../../../utils";
import { OrganizationMember } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectOrganizationMemberKey } from "./selectOrganizationMember";
import { selectAllOrganizationMembersKey } from "./selectOrganizationMembers";

export type UpdateOrganizationMemberArgs = Pick<
  OrganizationMember,
  "id" | "role"
>;

export const updateOrganizationMember = async ({
  id,
  role,
}: UpdateOrganizationMemberArgs): Promise<OrganizationMember> => {
  const { data, error } = await fromSupabase("organizationMember")
    .update({ id, role })
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateOrganizationMember = (
  options?: UseMutationOptions<
    OrganizationMember,
    PostgrestError,
    UpdateOrganizationMemberArgs
  >
): UseMutationResult<
  OrganizationMember,
  PostgrestError,
  UpdateOrganizationMemberArgs
> => {
  const queryClient = useQueryClient();

  const profile = useProfileContext();

  return useMutation(updateOrganizationMember, {
    ...options,
    onSuccess: (item, ...args) => {
      queryClient.invalidateQueries(selectAllOrganizationMembersKey());
      queryClient.invalidateQueries(
        selectOrganizationMemberKey({
          organizationId: item.organization_id,
          userId: profile.user_id,
        })
      );
      options?.onSuccess?.(item, ...args);
    },
  });
};
