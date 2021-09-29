import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Workflow } from "../../types";

export type SelectWorkflowsArgs = Partial<
  Pick<Workflow, "organization_id" | "template_id" | "name">
> & {
  from: number;
  to: number;
};

export type SelectWorkflowsKey = ["Workflows", SelectWorkflowsArgs];

export type SelectWorkflowsResult = {
  entries: Workflow[];
  count: number;
};

export const selectWorkflowsKey = (
  args: SelectWorkflowsArgs
): SelectWorkflowsKey => ["Workflows", args];

export const selectWorkflows = async ({
  queryKey: [, { organization_id, template_id, name, from, to }],
}: QueryFunctionContext<SelectWorkflowsKey>): Promise<SelectWorkflowsResult> => {
  const builder = fromSupabase("workflow").select("*", { count: "exact" });

  const nameBuilder = name ? builder.textSearch("name", name) : builder;
  const orgBuilder = organization_id
    ? nameBuilder.eq("organization_id", organization_id)
    : builder;
  const templateBuilder = template_id
    ? orgBuilder.eq("template_id", template_id)
    : builder;

  const { data, error, count } = await templateBuilder.range(from, to);

  if (error) throw error;

  return { entries: data ?? [], count: count ?? 0 };
};

export const useSelectWorkflows = (
  args: SelectWorkflowsArgs,
  options?: UseQueryOptions<
    SelectWorkflowsResult,
    PostgrestError,
    SelectWorkflowsResult,
    SelectWorkflowsKey
  >
): UseQueryResult<SelectWorkflowsResult | null, PostgrestError> =>
  useQuery(selectWorkflowsKey(args), selectWorkflows, options);
