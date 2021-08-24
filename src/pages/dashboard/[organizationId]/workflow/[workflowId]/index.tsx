import React from "react";
import { WorkflowEditor } from "../../../../../molecules";
import { OrganizationLayout } from "../../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../../utils";

const WorkflowPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <WorkflowEditor />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default WorkflowPage;
