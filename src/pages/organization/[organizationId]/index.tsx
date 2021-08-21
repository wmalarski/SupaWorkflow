import React from "react";
import {
  DashboardCorner,
  OrganizationDashboard,
  OrganizationSideBar,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { GridPage } from "../../../templates";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../utils";

const OrganizationIdPage = ({
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
        <OrganizationDashboard />
      </GridPage>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute;

export default OrganizationIdPage;
