import { supabase } from "../../supabase";
import { Organization } from "../../types";

export type SelectOrganizationArgs = {
  id: number;
};

export const selectOrganization = async ({
  id,
}: SelectOrganizationArgs): Promise<Organization | null> => {
  const { data, error } = await supabase
    .from("team_member")
    .select(
      `
      *, 
      profile: profile_id ( 
        * 
      ),
      team: team_id (
        *,
        organization: organization_id (
          *
        )
      ) 
      `
    )
    .eq("id", id)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};
