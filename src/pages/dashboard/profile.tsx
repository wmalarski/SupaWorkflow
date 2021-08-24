import React from "react";
import { DashboardCorner, DashboardSideBar } from "../../molecules";
import ProfileSettings from "../../molecules/profile/profileSettings/ProfileSettings/ProfileSettings";
import { UserNavigation } from "../../organisms";
import { GridPage } from "../../templates";
import { RouteProfileContextProvider } from "../../utils";

const ProfilePage = (): JSX.Element => (
  <RouteProfileContextProvider>
    <GridPage
      corner={<DashboardCorner />}
      header={<UserNavigation />}
      sideBar={<DashboardSideBar />}
    >
      <ProfileSettings />
    </GridPage>
  </RouteProfileContextProvider>
);

export default ProfilePage;
