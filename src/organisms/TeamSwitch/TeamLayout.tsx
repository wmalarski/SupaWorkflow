import {
  DashboardCorner,
  ProfileHeader,
  TeamHeader,
  TeamSideBar,
} from "molecules";
import React from "react";
import { GridPage } from "templates";

export type TeamLayoutProps = {
  children: React.ReactNode;
};

const TeamLayout = ({ children }: TeamLayoutProps): React.ReactElement => (
  <GridPage
    corner={<DashboardCorner />}
    headerLeft={<TeamHeader />}
    headerRight={<ProfileHeader />}
    sideBar={<TeamSideBar />}
  >
    {children}
  </GridPage>
);

export default TeamLayout;
