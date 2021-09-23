import React from "react";
import {
  DashboardCorner,
  ProfileHeader,
  TeamHeader,
  TeamSideBar,
} from "../../molecules";
import { FormPage, GridPage } from "../../templates";

export type TeamLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const TeamLayout = ({
  isForm,
  children,
}: TeamLayoutProps): React.ReactElement =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      headerLeft={<TeamHeader />}
      headerRight={<ProfileHeader />}
    >
      {children}
    </FormPage>
  ) : (
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
