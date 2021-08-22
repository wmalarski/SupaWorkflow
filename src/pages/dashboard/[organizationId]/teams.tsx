import React from "react";
import {
  DashboardCorner,
  OrganizationSideBar,
  OrganizationTeams,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { GridPage } from "../../../templates";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../utils";

const OrganizationTeamsPage = ({
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
        <OrganizationTeams />
      </GridPage>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationTeamsPage;
