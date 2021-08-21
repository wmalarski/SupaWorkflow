import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Template } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectTemplatesArgs = Partial<
  Pick<Template, "name" | "organization_id">
>;

export type SelectTemplatesKey = ["Templates", SelectTemplatesArgs];

export const selectTemplatesKey = (
  args: SelectTemplatesArgs
): SelectTemplatesKey => ["Templates", args];

export const selectTemplates = async ({
  queryKey: [, { name, organization_id }],
}: QueryFunctionContext<SelectTemplatesKey>): Promise<Template[]> => {
  const builder = fromSupabase("template").select("*");

  const nameBuilder = name ? builder.textSearch("name", name) : builder;
  const orgBuilder = organization_id
    ? nameBuilder.eq("organization_id", organization_id)
    : builder;

  const { data, error } = await orgBuilder;

  if (error) throw error;

  return data ?? [];
};

export const useSelectTemplates = (
  args: SelectTemplatesArgs,
  options?: UseQueryOptions<
    Template[],
    PostgrestError,
    Template[],
    SelectTemplatesKey
  >
): UseQueryResult<Template[] | null, PostgrestError> =>
  useQuery(selectTemplatesKey(args), selectTemplates, options);
