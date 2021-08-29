import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { Workflow } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type InsertWorkflowArgs = Omit<Workflow, "id">;

export const insertWorkflow = async (
  args: InsertWorkflowArgs
): Promise<Workflow> => {
  const { data, error } = await fromSupabase("workflow").insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useInsertWorkflow = (
  options?: UseMutationOptions<Workflow, PostgrestError, InsertWorkflowArgs>
): UseMutationResult<Workflow, PostgrestError, InsertWorkflowArgs> =>
  useMutation(insertWorkflow, options);
