import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Workflow } from "../../types";

export type InsertWorkflowArgs = Omit<Workflow, "id">;

export const insertWorkflow = async (
  args: InsertWorkflowArgs
): Promise<Workflow> => {
  const { data, error } = await fromSupabase("workflow").insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const insertWorkflowMiddleware = async (
  args: InsertWorkflowArgs
): Promise<Workflow> => {
  const result = await fetch("/api/workflow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(args),
  });

  return await result.json();
};

export const useInsertWorkflow = (
  options?: UseMutationOptions<Workflow, PostgrestError, InsertWorkflowArgs>
): UseMutationResult<Workflow, PostgrestError, InsertWorkflowArgs> =>
  useMutation(insertWorkflowMiddleware, options);
