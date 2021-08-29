import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { supabase, TABLES } from "../../supabase";
import { OrganizationMember, Profile } from "../../types";

export type SelectOrganizationMembersArgs = {
  from: number;
  to: number;
  organizationId: number;
};

export type SelectOrganizationMembersKey = [
  "OrganizationMembers",
  SelectOrganizationMembersArgs
];

export type SelectOrganizationMembersRow = OrganizationMember & {
  profile: Profile;
};

export type SelectOrganizationMembersResult = {
  entries: SelectOrganizationMembersRow[];
  count: number;
};

export const selectAllOrganizationMembersKey = (): QueryKey => [
  "OrganizationMembers",
];

export const selectOrganizationMembersKey = (
  args: SelectOrganizationMembersArgs
): SelectOrganizationMembersKey => ["OrganizationMembers", args];

export const selectOrganizationMembers = async ({
  queryKey: [, { organizationId, from, to }],
}: QueryFunctionContext<SelectOrganizationMembersKey>): Promise<SelectOrganizationMembersResult> => {
  const { data, error, count } = await supabase
    .from<SelectOrganizationMembersRow>(TABLES.organizationMember)
    .select("*, profile: profile!profile_id ( * )", { count: "exact" })
    .eq("organization_id", organizationId)
    .range(from, to);

  if (error) throw error;

  return { entries: data ?? [], count: count ?? 0 };
};

export const useSelectOrganizationMembers = (
  args: SelectOrganizationMembersArgs,
  options?: UseQueryOptions<
    SelectOrganizationMembersResult,
    PostgrestError,
    SelectOrganizationMembersResult,
    SelectOrganizationMembersKey
  >
): UseQueryResult<SelectOrganizationMembersResult | null, PostgrestError> =>
  useQuery(selectOrganizationMembersKey(args), selectOrganizationMembers, {
    keepPreviousData: true,
    ...options,
  });
