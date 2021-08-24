import React from "react";
import {
  DashboardCorner,
  DashboardOrganizations,
  DashboardSideBar,
} from "../../molecules";
import { UserNavigation } from "../../organisms";
import { GridPage } from "../../templates";
import { RouteProfileContextProvider } from "../../utils";

const OrganizationsPage = (): JSX.Element => (
  <RouteProfileContextProvider>
    <GridPage
      corner={<DashboardCorner />}
      header={<UserNavigation />}
      sideBar={<DashboardSideBar />}
    >
      <DashboardOrganizations />
    </GridPage>
  </RouteProfileContextProvider>
);

export default OrganizationsPage;
