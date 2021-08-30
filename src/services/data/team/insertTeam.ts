import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { Team } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectAllTeamsKey } from "./selectTeams";

export type InsertTeamArgs = Omit<Team, "id">;

export const insertTeam = async (
  args: InsertTeamArgs
): Promise<Team | null> => {
  const { data, error } = await fromSupabase("team").insert(args).single();

  if (error) throw error;

  return data;
};

export const useInsertTeam = (
  options?: UseMutationOptions<Team | null, PostgrestError, InsertTeamArgs>
): UseMutationResult<Team | null, PostgrestError, InsertTeamArgs> => {
  const client = useQueryClient();

  return useMutation(insertTeam, {
    ...options,
    onSuccess: (...args) => {
      client.invalidateQueries(selectAllTeamsKey());
      options?.onSuccess?.(...args);
    },
  });
};
