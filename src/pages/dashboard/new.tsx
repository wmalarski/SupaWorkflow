import React from "react";
import {
  CreateOrganization,
  DashboardCorner,
  DashboardSideBar,
} from "../../molecules";
import { UserNavigation } from "../../organisms";
import { GridPage } from "../../templates";
import {
  ProfileContextProvider,
  profileProtectedRoute,
  ProfileProtectedRouteProps,
} from "../../utils";

const NewOrganizationPage = ({
  profile,
}: ProfileProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <GridPage
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<DashboardSideBar />}
      >
        <CreateOrganization />
      </GridPage>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = profileProtectedRoute;

export default NewOrganizationPage;
