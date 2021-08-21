import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Workflow } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectWorkflowsArgs = Partial<
  Pick<Workflow, "organization_id" | "template_id" | "name">
>;

export type SelectWorkflowsKey = ["Workflows", SelectWorkflowsArgs];

export const selectWorkflowsKey = (
  args: SelectWorkflowsArgs
): SelectWorkflowsKey => ["Workflows", args];

export const selectWorkflows = async ({
  queryKey: [, { organization_id, template_id, name }],
}: QueryFunctionContext<SelectWorkflowsKey>): Promise<Workflow[]> => {
  const builder = fromSupabase("workflow").select("*");

  const nameBuilder = name ? builder.textSearch("name", name) : builder;
  const orgBuilder = organization_id
    ? nameBuilder.eq("organization_id", organization_id)
    : builder;
  const templateBuilder = template_id
    ? orgBuilder.eq("template_id", template_id)
    : builder;

  const { data, error } = await templateBuilder;

  if (error) throw error;

  return data ?? [];
};

export const useSelectWorkflows = (
  args: SelectWorkflowsArgs,
  options?: UseQueryOptions<
    Workflow[],
    PostgrestError,
    Workflow[],
    SelectWorkflowsKey
  >
): UseQueryResult<Workflow[] | null, PostgrestError> =>
  useQuery(selectWorkflowsKey(args), selectWorkflows, options);
