import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Workflow } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectWorkflowArgs = {
  id: number;
};

export type SelectWorkflowKey = ["Workflow", SelectWorkflowArgs];

export const selectWorkflowKey = (
  args: SelectWorkflowArgs
): SelectWorkflowKey => ["Workflow", args];

export const selectWorkflow = async ({
  queryKey: [, { id }],
}: QueryFunctionContext<SelectWorkflowKey>): Promise<Workflow | null> => {
  const { data, error } = await fromSupabase("workflow")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectWorkflow = (
  args: SelectWorkflowArgs,
  options?: UseQueryOptions<
    Workflow | null,
    PostgrestError,
    Workflow | null,
    SelectWorkflowKey
  >
): UseQueryResult<Workflow | null, PostgrestError> =>
  useQuery(selectWorkflowKey(args), selectWorkflow, options);
