import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { supabase } from "../../supabase";
import { OrganizationRole } from "../../types";

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
): UseMutationResult<void, PostgrestError, InviteOrganizationMemberArgs> =>
  useMutation(inviteOrganizationMember, options);
