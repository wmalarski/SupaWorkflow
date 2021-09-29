import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Template } from "../../types";

export type SelectTemplatesArgs = Partial<
  Pick<Template, "name" | "organization_id">
> & {
  from: number;
  to: number;
};

export type SelectTemplatesKey = ["Templates", SelectTemplatesArgs];

export type SelectTemplatesResult = {
  entries: Template[];
  count: number;
};

export const selectAllTemplatesKey = (): QueryKey => ["Templates"];

export const selectTemplatesKey = (
  args: SelectTemplatesArgs
): SelectTemplatesKey => ["Templates", args];

export const selectTemplates = async ({
  queryKey: [, { name, organization_id, from, to }],
}: QueryFunctionContext<SelectTemplatesKey>): Promise<SelectTemplatesResult> => {
  const builder = fromSupabase("template").select("*");

  const nameBuilder = name ? builder.textSearch("name", name) : builder;
  const orgBuilder = organization_id
    ? nameBuilder.eq("organization_id", organization_id)
    : builder;

  const { data, error, count } = await orgBuilder.range(from, to);

  if (error) throw error;

  return { entries: data ?? [], count: count ?? 0 };
};

export const useSelectTemplates = (
  args: SelectTemplatesArgs,
  options?: UseQueryOptions<
    SelectTemplatesResult,
    PostgrestError,
    SelectTemplatesResult,
    SelectTemplatesKey
  >
): UseQueryResult<SelectTemplatesResult, PostgrestError> =>
  useQuery(selectTemplatesKey(args), selectTemplates, options);
