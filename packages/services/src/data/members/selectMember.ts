import { PostgrestError } from "@supabase/supabase-js";
import {
  QueryFunctionContext,
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from "react-query";
import { Organization, OrganizationMember, Profile } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectMemberArgs = {
  userId: string;
  organizationId: number;
};

export type SelectMemberKey = ["Member", SelectMemberArgs];

export const selectMemberKey = (args: SelectMemberArgs): SelectMemberKey => [
  "Member",
  args,
];

export type SelectMemberResult = {
  member: OrganizationMember;
  profile: Profile;
  organization: Organization;
};

export const selectMember = async ({
  queryKey: [, { userId, organizationId }],
}: QueryFunctionContext<SelectMemberKey>): Promise<SelectMemberResult | null> => {
  const { data, error } = await fromSupabase("members")
    .select("*")
    .eq("profile_user_id", userId)
    .eq("organization_id", organizationId)
    .limit(1);

  if (error) throw error;

  const result = data?.[0];
  if (!result) return null;

  return {
    member: {
      id: result.member_id,
      organization_id: result.organization_id,
      profile_id: result.profile_id,
      role: result.member_role,
    },
    organization: {
      id: result.organization_id,
      name: result.organization_name,
      avatar: result.organization_avatar,
      hash: result.organization_hash,
      author_id: result.organization_author_id,
      description: result.organization_description,
    },
    profile: {
      avatar: result.profile_avatar,
      id: result.profile_id,
      name: result.profile_name,
      user_id: result.profile_user_id,
    },
  };
};

export const useSelectMember = (
  args: SelectMemberArgs,
  options?: UseQueryOptions<
    SelectMemberResult | null,
    PostgrestError,
    SelectMemberResult | null,
    SelectMemberKey
  >
): UseQueryResult<SelectMemberResult | null, PostgrestError> =>
  useQuery(selectMemberKey(args), selectMember, options);
