import React from "react";
import {
  DashboardCorner,
  OrganizationDashboard,
  OrganizationSideBar,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import GridTemplate from "../../../templates/GridPage/GridPage";
import { OrganizationContextProvider } from "../../../utils/contexts/OrganizationContext";
import {
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../utils/routing/protectedRoute";

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
      <GridTemplate
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<OrganizationSideBar />}
      >
        <OrganizationDashboard />
      </GridTemplate>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute;

export default OrganizationIdPage;
