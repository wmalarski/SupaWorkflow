import React from "react";
import { DashboardSwitch } from "../../organisms";
import { Profile } from "../../services";
import {
  getProfileProps,
  GetProfileProps,
  ProfileContextProvider,
} from "../../utils";

export type DashboardPageProps = {
  profile: Profile;
};

const DashboardPage = ({ profile }: GetProfileProps): React.ReactElement => (
  <ProfileContextProvider profile={profile}>
    <DashboardSwitch />
  </ProfileContextProvider>
);

export const getServerSideProps = getProfileProps;

export default DashboardPage;
