import React from "react";
import { DashboardHeader, ProfileHeader } from "../../molecules";
import { Header } from "../../templates";

export type UserNavigationProps = {
  paths?: string[];
};

const UserNavigation = (): JSX.Element => {
  return <Header left={<DashboardHeader />} right={<ProfileHeader />} />;
};

export default UserNavigation;
