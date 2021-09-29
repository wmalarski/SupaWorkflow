import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { useProfileContext } from "../../contexts/ProfileContext";
import { Organization } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectMemberKey } from "../members/selectMember";

export type UpdateOrganizationArgs = Pick<
  Organization,
  "id" | "name" | "description"
>;

export const updateOrganization = async ({
  id,
  name,
}: UpdateOrganizationArgs): Promise<Organization> => {
  const { data, error } = await fromSupabase("organization")
    .update({ id, name })
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useUpdateOrganization = (
  options?: UseMutationOptions<
    Organization,
    PostgrestError,
    UpdateOrganizationArgs
  >
): UseMutationResult<Organization, PostgrestError, UpdateOrganizationArgs> => {
  const queryClient = useQueryClient();

  const profile = useProfileContext();

  return useMutation(updateOrganization, {
    ...options,
    onSuccess: (item, ...args) => {
      queryClient.invalidateQueries(
        selectMemberKey({
          organizationId: item.id,
          userId: profile.user_id,
        })
      );
      options?.onSuccess?.(item, ...args);
    },
  });
};
