import React from "react";
import {
  DashboardCorner,
  DashboardHeader,
  DashboardSideBar,
  ProfileHeader,
} from "../../molecules";
import { FormPage, GridPage, Header } from "../../templates";

export type DashboardLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const DashboardLayout = ({
  isForm,
  children,
}: DashboardLayoutProps): JSX.Element | null =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      header={<Header left={<DashboardHeader />} right={<ProfileHeader />} />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      header={<Header left={<DashboardHeader />} right={<ProfileHeader />} />}
      sideBar={<DashboardSideBar />}
    >
      {children}
    </GridPage>
  );

export default DashboardLayout;
