import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Profile } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectProfileArgs = {
  userId: string;
};

export type SelectProfileKey = ["Profile", SelectProfileArgs];

export const selectProfileKey = (args: SelectProfileArgs): SelectProfileKey => [
  "Profile",
  args,
];

export const selectProfile = async ({
  queryKey: [, { userId }],
}: QueryFunctionContext<SelectProfileKey>): Promise<Profile | null> => {
  const { data, error } = await fromSupabase("profile")
    .select("*")
    .eq("user_id", userId)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};

export const useSelectProfile = (
  args: SelectProfileArgs,
  options?: UseQueryOptions<
    Profile | null,
    PostgrestError,
    Profile | null,
    SelectProfileKey
  >
): UseQueryResult<Profile | null, PostgrestError> =>
  useQuery(selectProfileKey(args), selectProfile, options);
