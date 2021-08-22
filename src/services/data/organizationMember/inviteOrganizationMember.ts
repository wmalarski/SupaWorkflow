import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { supabase } from "../../supabase";
import { OrganizationRole } from "../../types";
import { selectAllOrganizationMembersKey } from "./selectOrganizationMembers";

export type InviteOrganizationMemberArgs = {
  organizationId: number;
  email: string;
  role: OrganizationRole;
};

export const inviteOrganizationMember = async ({
  email,
  organizationId,
  role,
}: InviteOrganizationMemberArgs): Promise<void> => {
  const { error } = await supabase
    .rpc("invite_to_organization", {
      organization_id: organizationId,
      input_email: email,
      input_role: role,
    })
    .select("*");

  if (error) throw error;

  return;
};

export const useInviteOrganizationMember = (
  options?: UseMutationOptions<
    void,
    PostgrestError,
    InviteOrganizationMemberArgs
  >
): UseMutationResult<void, PostgrestError, InviteOrganizationMemberArgs> => {
  const queryClient = useQueryClient();

  return useMutation(inviteOrganizationMember, {
    ...options,
    onSuccess: (item, variables, ...args) => {
      queryClient.invalidateQueries(selectAllOrganizationMembersKey());
      options?.onSuccess?.(item, variables, ...args);
    },
  });
};
