import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Message } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectMessagesArgs = {
  version: number;
};

export type SelectMessagesKey = ["Messages", SelectMessagesArgs];

export const selectMessagesKey = (
  args: SelectMessagesArgs
): SelectMessagesKey => ["Messages", args];

export const selectMessages = async ({
  queryKey: [, { version }],
}: QueryFunctionContext<SelectMessagesKey>): Promise<Message[]> => {
  const { data, error } = await fromSupabase("message")
    .select("*")
    .gt("version", version);

  if (error) throw error;

  return data ?? [];
};

export const useSelectMessages = (
  args: SelectMessagesArgs,
  options?: UseQueryOptions<
    Message[],
    PostgrestError,
    Message[],
    SelectMessagesKey
  >
): UseQueryResult<Message[] | null, PostgrestError> =>
  useQuery(selectMessagesKey(args), selectMessages, options);
