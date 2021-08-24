import React from "react";
import { CreateWorkflow } from "../../../../../molecules";
import { OrganizationLayout } from "../../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../../utils";

const OrganizationTemplatePage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <CreateWorkflow />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default OrganizationTemplatePage;
