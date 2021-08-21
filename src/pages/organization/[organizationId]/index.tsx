import React from "react";
import {
  DashboardCorner,
  DashboardSideBar,
  OrganizationDashboard,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import GridTemplate from "../../../templates/GridPage/GridPage";
import { OrganizationContextProvider } from "../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../utils/profile/ProfileContext";
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

export const getServerSideProps = organizationProtectedRoute;

export default OrganizationIdPage;
