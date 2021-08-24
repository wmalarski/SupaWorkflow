import React from "react";
import { OrganizationDashboard } from "../../../molecules";
import { OrganizationLayout } from "../../../organisms";
import { RouteOrganizationContextProvider } from "../../../utils";

const OrganizationIdPage = (): JSX.Element => {
  return (
    <RouteOrganizationContextProvider>
      <OrganizationLayout>
        <OrganizationDashboard />
      </OrganizationLayout>
    </RouteOrganizationContextProvider>
  );
};

export default OrganizationIdPage;
