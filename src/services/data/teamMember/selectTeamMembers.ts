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
  teamId: number;
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
  queryKey: [, { teamId, from, to }],
}: QueryFunctionContext<SelectTeamMembersKey>): Promise<SelectTeamMemberResult> => {
  const { data, error, count } = await supabase
    .from<SelectTeamMemberRow>(TABLES.teamMember)
    .select("*, profile: profile!profile_id", { count: "exact" })
    .eq("team_id", teamId)
    .range(from, to);

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
