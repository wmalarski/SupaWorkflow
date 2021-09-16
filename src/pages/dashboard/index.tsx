import React from "react";
import { DashboardSwitch } from "../../organisms";
import { Profile } from "../../services";
import { ProfileContextProvider, useUserContext } from "../../utils";

export type DashboardPageProps = {
  profile: Profile;
};

const DashboardPage = (): React.ReactElement | null => {
  const { user } = useUserContext();

  return user ? (
    <ProfileContextProvider userId={user.id}>
      <DashboardSwitch />
    </ProfileContextProvider>
  ) : null;
};

export default DashboardPage;
