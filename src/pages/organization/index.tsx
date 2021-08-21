import React from "react";
import {
  DashboardCorner,
  DashboardSideBar,
  OrganizationsList,
} from "../../molecules";
import { UserNavigation } from "../../organisms";
import { GridPage } from "../../templates";
import {
  ProfileContextProvider,
  profileProtectedRoute,
  ProfileProtectedRouteProps,
} from "../../utils";

const OrganizationsPage = ({
  profile,
}: ProfileProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <GridPage
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<DashboardSideBar />}
      >
        <OrganizationsList />
      </GridPage>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = profileProtectedRoute;

export default OrganizationsPage;
