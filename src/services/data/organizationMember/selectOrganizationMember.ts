import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import {
  Organization,
  OrganizationMember,
  OrganizationRole,
  Profile,
} from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectOrganizationMemberArgs = {
  roles?: OrganizationRole[];
  userId: string;
  organizationId: number;
};

export type SelectOrganizationMemberKey = [
  "OrganizationMember",
  SelectOrganizationMemberArgs
];

export const selectOrganizationMemberKey = (
  args: SelectOrganizationMemberArgs
): SelectOrganizationMemberKey => ["OrganizationMember", args];

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
  queryKey: [, { roles, userId, organizationId }],
}: QueryFunctionContext<SelectOrganizationMemberKey>): Promise<SelectOrganizationMemberResult | null> => {
  const builder = fromSupabase("members")
    .select("*")
    .eq("profile_user_id", userId)
    .eq("organization_id", organizationId);

  const rolesBuilder = roles ? builder.in("member_role", roles) : builder;

  const { data, error } = await rolesBuilder.limit(1);

  if (error) throw error;

  const result = data?.[0];
  if (!result) return null;

  return {
    member: {
      id: result.member_id,
      organization_id: result.organization_id,
      profile_id: result.profile_id,
      role: result.member_role,
    },
    organization: {
      id: result.organization_id,
      name: result.organization_name,
      avatar: result.organization_avatar,
      hash: result.organization_hash,
      author_id: result.organization_author_id,
      description: result.organization_description,
    },
    profile: {
      avatar: result.profile_avatar,
      id: result.profile_id,
      name: result.profile_name,
      user_id: result.profile_user_id,
    },
  };
};

export const useSelectOrganizationMember = (
  args: SelectOrganizationMemberArgs,
  options?: UseQueryOptions<
    SelectOrganizationMemberResult | null,
    PostgrestError,
    SelectOrganizationMemberResult | null,
    SelectOrganizationMemberKey
  >
): UseQueryResult<SelectOrganizationMemberResult | null, PostgrestError> =>
  useQuery(
    selectOrganizationMemberKey(args),
    selectOrganizationMember,
    options
  );
