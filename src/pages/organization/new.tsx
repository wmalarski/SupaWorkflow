import React from "react";
import {
  CreateOrganization,
  DashboardCorner,
  DashboardSideBar,
} from "../../molecules";
import { UserNavigation } from "../../organisms";
import GridTemplate from "../../templates/GridPage/GridPage";
import { ProfileContextProvider } from "../../utils/profile/ProfileContext";
import {
  profileProtectedRoute,
  ProfileProtectedRouteProps,
} from "../../utils/routing/protectedRoute";

const NewOrganizationPage = ({
  profile,
}: ProfileProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <GridTemplate
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<DashboardSideBar />}
      >
        <CreateOrganization />
      </GridTemplate>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = profileProtectedRoute;

export default NewOrganizationPage;
