import { PostgrestError } from "@supabase/supabase-js";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { MessageVersion } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectMessageVersionKey = ["MessageVersion"];

export const selectMessageVersionKey = (): SelectMessageVersionKey => [
  "MessageVersion",
];

export const selectMessageVersion =
  async (): Promise<MessageVersion | null> => {
    const { data, error } = await fromSupabase("messageVersion")
      .select("*")
      .limit(1);

    if (error) throw error;

    return data?.[0] ?? null;
  };

export const useSelectMessageVersion = (
  options?: UseQueryOptions<
    MessageVersion | null,
    PostgrestError,
    MessageVersion | null,
    SelectMessageVersionKey
  >
): UseQueryResult<MessageVersion | null, PostgrestError> =>
  useQuery(selectMessageVersionKey(), selectMessageVersion, options);
