import { PostgrestError } from "@supabase/supabase-js";
import { useQuery, UseQueryOptions, UseQueryResult } from "react-query";
import { Organization } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectOrganizationsKey = ["Organizations"];

export const selectOrganizationsKey = (): SelectOrganizationsKey => [
  "Organizations",
];

export const selectOrganizations = async (): Promise<Organization[]> => {
  const { data, error } = await fromSupabase("organization").select("*");

  if (error) throw error;

  return data ?? [];
};

export const useSelectOrganizations = (
  options?: UseQueryOptions<
    Organization[],
    PostgrestError,
    Organization[],
    SelectOrganizationsKey
  >
): UseQueryResult<Organization[] | null, PostgrestError> =>
  useQuery(selectOrganizationsKey(), selectOrganizations, options);
