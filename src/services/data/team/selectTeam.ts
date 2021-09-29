import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Team } from "../../types";

export type SelectTeamArgs = {
  id: number;
};

export type SelectTeamKey = ["Team", SelectTeamArgs];

export const selectTeamKey = (args: SelectTeamArgs): SelectTeamKey => [
  "Team",
  args,
];

export const selectTeam = async ({
  queryKey: [, { id }],
}: QueryFunctionContext<SelectTeamKey>): Promise<Team | null> => {
  const { data, error } = await fromSupabase("team")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectTeam = (
  args: SelectTeamArgs,
  options?: UseQueryOptions<
    Team | null,
    PostgrestError,
    Team | null,
    SelectTeamKey
  >
): UseQueryResult<Team | null, PostgrestError> =>
  useQuery(selectTeamKey(args), selectTeam, options);
