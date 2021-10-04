import {
  DashboardCorner,
  OrganizationHeader,
  OrganizationSideBar,
  ProfileHeader,
} from "molecules";
import React from "react";
import { GridPage } from "templates";

export type OrganizationLayoutProps = {
  children: React.ReactNode;
};

const OrganizationLayout = ({
  children,
}: OrganizationLayoutProps): React.ReactElement => (
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
