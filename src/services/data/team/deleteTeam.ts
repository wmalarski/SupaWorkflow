import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Team } from "../../types";
import { selectAllTeamsKey } from "./selectTeams";

export type DeleteTeamArgs = Pick<Team, "id">;

export const deleteTeam = async ({ id }: DeleteTeamArgs): Promise<void> => {
  const { error } = await fromSupabase("team").delete().eq("id", id).single();

  if (error) throw error;
};

export const useDeleteTeam = (
  options?: UseMutationOptions<void, PostgrestError, DeleteTeamArgs>
): UseMutationResult<void, PostgrestError, DeleteTeamArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteTeam, {
    ...options,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(selectAllTeamsKey());
      options?.onSuccess?.(...args);
    },
  });
};
