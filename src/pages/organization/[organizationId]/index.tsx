import { GetServerSideProps } from "next";
import React from "react";
import { OrganizationDashboard } from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import { Organization, Profile, TeamMemberPair } from "../../../services/types";
import {
  defaultOrganization,
  defaultProfile,
} from "../../../services/utils/defaults";
import Page from "../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../utils/profile/ProfileContext";
import { validateParam } from "../../../utils/routing/params";

export type OrganizationIdPageProps = {
  organization: Organization;
  profile: Profile;
  teams: TeamMemberPair[];
};

const OrganizationIdPage = ({
  organization,
  profile,
  teams,
}: OrganizationIdPageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} teams={teams}>
        <Page header={<UserNavigation />}>
          <OrganizationDashboard />
        </Page>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationIdPageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization
    const organizationId = validateParam(params?.organizationId, /\d+/);

    return organizationId
      ? {
          props: {
            organization: {
              ...defaultOrganization,
              id: Number(organizationId),
            },
            profile: defaultProfile,
            teams: [],
          },
        }
      : { notFound: true };
  };

export default OrganizationIdPage;
