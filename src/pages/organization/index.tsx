import React from "react";
import {
  DashboardCorner,
  DashboardSideBar,
  OrganizationsList,
} from "../../molecules";
import { UserNavigation } from "../../organisms";
import GridTemplate from "../../templates/GridPage/GridPage";
import { ProfileContextProvider } from "../../utils/contexts/ProfileContext";
import {
  profileProtectedRoute,
  ProfileProtectedRouteProps,
} from "../../utils/routing/protectedRoute";

const OrganizationsPage = ({
  profile,
}: ProfileProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <GridTemplate
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<DashboardSideBar />}
      >
        <OrganizationsList />
      </GridTemplate>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = profileProtectedRoute;

export default OrganizationsPage;
