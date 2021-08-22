import React from "react";
import { DashboardCorner, DashboardSideBar } from "../../molecules";
import ProfileSettings from "../../molecules/profile/profileSettings/ProfileSettings/ProfileSettings";
import { UserNavigation } from "../../organisms";
import { GridPage } from "../../templates";
import {
  ProfileContextProvider,
  profileProtectedRoute,
  ProfileProtectedRouteProps,
} from "../../utils";

const ProfilePage = ({ profile }: ProfileProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <GridPage
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<DashboardSideBar />}
      >
        <ProfileSettings />
      </GridPage>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = profileProtectedRoute;

export default ProfilePage;
