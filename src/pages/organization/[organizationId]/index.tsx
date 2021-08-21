import { GetServerSideProps } from "next";
import React from "react";
import {
  DashboardCorner,
  DashboardSideBar,
  OrganizationDashboard,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
} from "../../../services/types";
import {
  defaultOrganization,
  defaultOrganizationMember,
  defaultProfile,
} from "../../../services/utils/defaults";
import GridTemplate from "../../../templates/GridPage/GridPage";
import { OrganizationContextProvider } from "../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../utils/profile/ProfileContext";
import { validateParam } from "../../../utils/routing/params";

export type OrganizationIdPageProps = {
  organization: Organization;
  profile: Profile;
  member: OrganizationMember;
};

const OrganizationIdPage = ({
  organization,
  profile,
  member,
}: OrganizationIdPageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
        <GridTemplate
          corner={<DashboardCorner />}
          header={<UserNavigation />}
          sideBar={<DashboardSideBar />}
        >
          <OrganizationDashboard />
        </GridTemplate>
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
            member: defaultOrganizationMember,
          },
        }
      : { notFound: true };
  };

export default OrganizationIdPage;
