import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { Organization } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectOrganizationsKey } from "./selectOrganizations";

export type InsertOrganizationArgs = Omit<Organization, "id" | "hash">;

export const insertOrganization = async (
  args: InsertOrganizationArgs
): Promise<Organization> => {
  const { data, error } = await fromSupabase("organization")
    .insert(args)
    .single();

  if (error || !data) throw error;

  return data;
};

export const useInsertOrganization = (
  options?: UseMutationOptions<
    Organization,
    PostgrestError,
    InsertOrganizationArgs
  >
): UseMutationResult<Organization, PostgrestError, InsertOrganizationArgs> => {
  const queryClient = useQueryClient();

  return useMutation(insertOrganization, {
    ...options,
    onSuccess: (organization, ...args) => {
      queryClient.invalidateQueries(selectOrganizationsKey());
      options?.onSuccess?.(organization, ...args);
    },
  });
};
