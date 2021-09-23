import {
  DashboardCorner,
  DashboardHeader,
  DashboardSideBar,
  ProfileHeader,
} from "molecules";
import React from "react";
import { FormPage, GridPage } from "templates";

export type DashboardLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const DashboardLayout = ({
  isForm,
  children,
}: DashboardLayoutProps): React.ReactElement | null =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      headerLeft={<DashboardHeader />}
      headerRight={<ProfileHeader />}
    >
      {children}
    </FormPage>
  ) : (
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
