import React from "react";
import { WorkflowsList } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../utils";

const WorkflowsPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <WorkflowsList />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default WorkflowsPage;
