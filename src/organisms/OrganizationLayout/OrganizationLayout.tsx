import React from "react";
import { DashboardCorner, OrganizationSideBar } from "../../molecules";
import { GridPage } from "../../templates";
import UserNavigation from "../UserNavigation/UserNavigation";

export type OrganizationLayoutProps = {
  children: React.ReactNode;
};

const OrganizationLayout = ({
  children,
}: OrganizationLayoutProps): JSX.Element => {
  return (
    <GridPage
      corner={<DashboardCorner />}
      header={<UserNavigation />}
      sideBar={<OrganizationSideBar />}
    >
      {children}
    </GridPage>
  );
};

export default OrganizationLayout;
