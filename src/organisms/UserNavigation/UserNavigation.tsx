import React from "react";
import { ProfileHeader } from "../../molecules";
import DashboardHeader from "../../molecules/dashboard/dashboardHeader/DashboardHeader/DashboardHeader";
import { Header } from "../../templates";

export type UserNavigationProps = {
  paths?: string[];
};

const UserNavigation = (): JSX.Element => {
  return <Header left={<DashboardHeader />} right={<ProfileHeader />} />;
};

export default UserNavigation;
