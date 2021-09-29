import {
  DashboardCorner,
  OrganizationHeader,
  OrganizationSideBar,
  ProfileHeader,
} from "molecules";
import React from "react";
import { FormPage, GridPage } from "templates";

export type OrganizationLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const OrganizationLayout = ({
  isForm,
  children,
}: OrganizationLayoutProps): React.ReactElement =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      headerLeft={<OrganizationHeader />}
      headerRight={<ProfileHeader />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      headerLeft={<OrganizationHeader />}
      headerRight={<ProfileHeader />}
      sideBar={<OrganizationSideBar />}
    >
      {children}
    </GridPage>
  );

export default OrganizationLayout;
