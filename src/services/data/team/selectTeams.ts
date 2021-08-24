import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Team } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectTeamsArgs = {
  name?: string;
  organizationId: number;
};

export type SelectTeamsKey = ["Teams", SelectTeamsArgs];

export const selectTeamsKey = (args: SelectTeamsArgs): SelectTeamsKey => [
  "Teams",
  args,
];

export const selectTeams = async ({
  queryKey: [, { name, organizationId }],
}: QueryFunctionContext<SelectTeamsKey>): Promise<Team[]> => {
  const builder = fromSupabase("team")
    .select("*")
    .eq("organization_id", organizationId);

  const nameBuilder = name ? builder.textSearch("name", name) : builder;

  const { data, error } = await nameBuilder;

  if (error) throw error;

  return data ?? [];
};

export const useSelectTeams = (
  args: SelectTeamsArgs,
  options?: UseQueryOptions<Team[], PostgrestError, Team[], SelectTeamsKey>
): UseQueryResult<Team[] | null, PostgrestError> =>
  useQuery(selectTeamsKey(args), selectTeams, options);
