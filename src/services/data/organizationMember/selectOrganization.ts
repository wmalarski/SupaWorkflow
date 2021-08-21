import { supabase } from "../../supabase";
import { Organization, OrganizationMember, Profile } from "../../types";

export type SelectOrganizationMemberArgs = {
  userId: string;
  organizationId: number;
};

type QueryResult = OrganizationMember & {
  profile: Profile;
  organization: Organization;
};

export type SelectOrganizationMemberResult = {
  member: OrganizationMember;
  profile: Profile;
  organization: Organization;
};

export const selectOrganizationMember = async ({
  userId,
  organizationId,
}: SelectOrganizationMemberArgs): Promise<SelectOrganizationMemberResult | null> => {
  const { data, error } = await supabase
    .from<QueryResult>("organization_member")
    .select(
      `
      *,
      profile: profile_id ( 
        *
      ),
      organization: organization_id (
        *
      )
      `
    )
    .match({ "profile.user_id": userId })
    .eq("organization_id", organizationId)
    .limit(1);

  if (error) throw error;

  const result = data?.[0];
  if (!result) return null;
  const { organization, profile, ...member } = result;

  return { member, organization, profile };
};
