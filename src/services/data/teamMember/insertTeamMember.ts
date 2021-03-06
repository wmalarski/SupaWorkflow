import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { TeamMember } from "../../types";

export type InsertTeamMemberArgs = Omit<TeamMember, "id">;

export const insertTeamMember = async (
  args: InsertTeamMemberArgs
): Promise<TeamMember> => {
  const { data, error } = await fromSupabase("teamMember")
    .insert(args)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useInsertTeamMember = (
  options?: UseMutationOptions<TeamMember, PostgrestError, InsertTeamMemberArgs>
): UseMutationResult<TeamMember, PostgrestError, InsertTeamMemberArgs> =>
  useMutation(insertTeamMember, options);
