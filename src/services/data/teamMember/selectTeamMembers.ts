import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Profile, supabase, TABLES } from "../..";
import { TeamMember } from "../../types";

export type SelectTeamMembersArgs = {
  organizationId?: number;
  teamId?: number;
  from: number;
  to: number;
};

export type SelectTeamMembersKey = ["TeamMembers", SelectTeamMembersArgs];

export type SelectTeamMemberRow = TeamMember & {
  profile: Profile;
};

export type SelectTeamMemberResult = {
  entries: SelectTeamMemberRow[];
  count: number;
};

export const selectAllTeamMembersKey = (): QueryKey => ["TeamMembers"];

export const selectTeamMembersKey = (
  args: SelectTeamMembersArgs
): SelectTeamMembersKey => ["TeamMembers", args];

export const selectTeamMembers = async ({
  queryKey: [, { teamId, organizationId, from, to }],
}: QueryFunctionContext<SelectTeamMembersKey>): Promise<SelectTeamMemberResult> => {
  const builder = supabase
    .from<SelectTeamMemberRow>(TABLES.teamMember)
    .select("*, profile: profile!profile_id ( * )", { count: "exact" })
    .range(from, to);

  const teamBuilder = teamId ? builder.eq("team_id", teamId) : builder;
  const organizationBuilder = organizationId
    ? teamBuilder.match({ "team_id.organization_id": organizationId })
    : teamBuilder;

  const { data, error, count } = await organizationBuilder;

  if (error) throw error;

  return { entries: data ?? [], count: count ?? 0 };
};

export const useSelectTeamMembers = (
  args: SelectTeamMembersArgs,
  options?: UseQueryOptions<
    SelectTeamMemberResult,
    PostgrestError,
    SelectTeamMemberResult,
    SelectTeamMembersKey
  >
): UseQueryResult<SelectTeamMemberResult | null, PostgrestError> =>
  useQuery(selectTeamMembersKey(args), selectTeamMembers, options);
