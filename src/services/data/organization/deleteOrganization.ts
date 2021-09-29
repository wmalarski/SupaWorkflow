import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import fromSupabase from "../../helpers/fromSupabase";
import { Organization } from "../../types";
import { selectOrganizationsKey } from "./selectOrganizations";

export type DeleteOrganizationArgs = Pick<Organization, "id">;

export const deleteOrganization = async ({
  id,
}: DeleteOrganizationArgs): Promise<void> => {
  const { error } = await fromSupabase("organization")
    .delete()
    .eq("id", id)
    .single();

  if (error) throw error;
};

export const useDeleteOrganization = (
  options?: UseMutationOptions<void, PostgrestError, DeleteOrganizationArgs>
): UseMutationResult<void, PostgrestError, DeleteOrganizationArgs> => {
  const queryClient = useQueryClient();

  return useMutation(deleteOrganization, {
    ...options,
    onSuccess: (...args) => {
      queryClient.invalidateQueries(selectOrganizationsKey());
      options?.onSuccess?.(...args);
    },
  });
};
