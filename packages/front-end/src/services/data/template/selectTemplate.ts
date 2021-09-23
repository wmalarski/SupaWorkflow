import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Template } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectTemplateArgs = {
  id: number;
};

export type SelectTemplateKey = ["Template", SelectTemplateArgs];

export const selectTemplateKey = (
  args: SelectTemplateArgs
): SelectTemplateKey => ["Template", args];

export const selectTemplate = async ({
  queryKey: [, { id }],
}: QueryFunctionContext<SelectTemplateKey>): Promise<Template | null> => {
  const { data, error } = await fromSupabase("template")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectTemplate = (
  args: SelectTemplateArgs,
  options?: UseQueryOptions<
    Template | null,
    PostgrestError,
    Template | null,
    SelectTemplateKey
  >
): UseQueryResult<Template | null, PostgrestError> =>
  useQuery(selectTemplateKey(args), selectTemplate, options);
