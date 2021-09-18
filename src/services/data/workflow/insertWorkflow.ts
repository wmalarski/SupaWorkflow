import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";
import { Workflow } from "../../types";

export type InsertWorkflowArgs = Omit<Workflow, "id">;

export const insertWorkflow = async (
  args: InsertWorkflowArgs
): Promise<Workflow> => {
  const result = await fetch("/api/workflow", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify(args),
  });

  console.log({ result });

  // const { data, error } = await fromSupabase("workflow").insert(args).single();

  // if (error || !data) throw error;

  // return data;
  throw "Not implemented";
};

export const useInsertWorkflow = (
  options?: UseMutationOptions<Workflow, PostgrestError, InsertWorkflowArgs>
): UseMutationResult<Workflow, PostgrestError, InsertWorkflowArgs> =>
  useMutation(insertWorkflow, options);
