import React from "react";
import {
  DashboardCorner,
  NewTeamMember,
  OrganizationSideBar,
  OrganizationTeam,
} from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { GridPage } from "../../../../templates";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../utils";

const OrganizationTeamPage = ({
  organization,
  profile,
  member,
}: OrganizationProtectedRouteProps): JSX.Element => {
  return (
    <OrganizationContextProvider
      organization={organization}
      member={member}
      profile={profile}
    >
      <GridPage
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<OrganizationSideBar />}
      >
        <NewTeamMember />
        <OrganizationTeam />
      </GridPage>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationTeamPage;
