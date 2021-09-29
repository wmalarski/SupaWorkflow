import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  QueryKey,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Member } from "../../types";

export type SelectMembersArgs = {
  from: number;
  to: number;
  organizationId: number;
  name?: string;
};

export type SelectMembersKey = ["Members", SelectMembersArgs];

export type SelectMembersResult = {
  entries: Member[];
  count: number;
};

export const selectAllMembersKey = (): QueryKey => ["Members"];

export const selectMembersKey = (args: SelectMembersArgs): SelectMembersKey => [
  "Members",
  args,
];

export const selectMembers = async ({
  queryKey: [, { organizationId, from, to, name }],
}: QueryFunctionContext<SelectMembersKey>): Promise<SelectMembersResult> => {
  const builder = fromSupabase("members")
    .select("*", { count: "exact" })
    .eq("organization_id", organizationId)
    .range(from, to);

  const nameBuilder = name ? builder.textSearch("profile_name", name) : builder;

  const { data, error, count } = await nameBuilder;

  if (error) throw error;

  return { entries: data ?? [], count: count ?? 0 };
};

export const useSelectMembers = (
  args: SelectMembersArgs,
  options?: UseQueryOptions<
    SelectMembersResult,
    PostgrestError,
    SelectMembersResult,
    SelectMembersKey
  >
): UseQueryResult<SelectMembersResult | null, PostgrestError> =>
  useQuery(selectMembersKey(args), selectMembers, {
    keepPreviousData: true,
    ...options,
  });
