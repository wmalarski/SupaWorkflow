import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase, TABLES } from "../../supabase";
import {
  Organization,
  OrganizationMember,
  OrganizationRole,
  Profile,
} from "../../types";

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
  const builder = supabase
    .from<QueryResult>(TABLES.organizationMember)
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
    .eq("organization_id", organizationId);

  const rolesBuilder = roles ? builder.in("role", roles) : builder;

  const { data, error } = await rolesBuilder.limit(1);

  if (error) throw error;

  const result = data?.[0];
  if (!result) return null;
  const { organization, profile, ...member } = result;

  return { member, organization, profile };
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
