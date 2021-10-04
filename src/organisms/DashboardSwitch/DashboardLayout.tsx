import {
  DashboardCorner,
  DashboardHeader,
  DashboardSideBar,
  ProfileHeader,
} from "molecules";
import React from "react";
import { GridPage } from "templates";

export type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({
  children,
}: DashboardLayoutProps): React.ReactElement | null => (
  <GridPage
    corner={<DashboardCorner />}
    headerLeft={<DashboardHeader />}
    headerRight={<ProfileHeader />}
    sideBar={<DashboardSideBar />}
  >
    {children}
  </GridPage>
);

export default DashboardLayout;
