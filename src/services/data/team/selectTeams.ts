import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Team } from "../../types";

export type SelectTeamsArgs = {
  name?: string;
  organizationId: number;
  from: number;
  to: number;
};

export type SelectTeamsKey = ["Teams", SelectTeamsArgs];

export type SelectTeamsResult = {
  entries: Team[];
  count: number;
};

export const selectTeamsKey = (args: SelectTeamsArgs): SelectTeamsKey => [
  "Teams",
  args,
];

export const selectAllTeamsKey = (): QueryKey => ["Workflows"];

export const selectTeams = async ({
  queryKey: [, { name, organizationId, from, to }],
}: QueryFunctionContext<SelectTeamsKey>): Promise<SelectTeamsResult> => {
  const builder = fromSupabase("team")
    .select("*")
    .eq("organization_id", organizationId);

  const nameBuilder = name ? builder.textSearch("name", name) : builder;

  const { data, error, count } = await nameBuilder.range(from, to);

  if (error) throw error;

  return { entries: data ?? [], count: count ?? 0 };
};

export const useSelectTeams = (
  args: SelectTeamsArgs,
  options?: UseQueryOptions<
    SelectTeamsResult,
    PostgrestError,
    SelectTeamsResult,
    SelectTeamsKey
  >
): UseQueryResult<SelectTeamsResult, PostgrestError> =>
  useQuery(selectTeamsKey(args), selectTeams, options);
