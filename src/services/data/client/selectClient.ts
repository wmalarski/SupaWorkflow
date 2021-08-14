import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Client } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectClientArgs = {
  id: string;
};

export type SelectClientKey = ["Client", SelectClientArgs];

export const selectClientKey = (args: SelectClientArgs): SelectClientKey => [
  "Client",
  args,
];

export const selectClient = async ({
  queryKey: [, { id }],
}: QueryFunctionContext<SelectClientKey>): Promise<Client | null> => {
  const { data, error } = await fromSupabase("client")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectClient = (
  args: SelectClientArgs,
  options?: UseQueryOptions<
    Client | null,
    PostgrestError,
    Client | null,
    SelectClientKey
  >
): UseQueryResult<Client | null, PostgrestError> =>
  useQuery(selectClientKey(args), selectClient, options);
