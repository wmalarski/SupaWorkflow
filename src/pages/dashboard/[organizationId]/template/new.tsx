import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../utils";

const OrganizationNewTemplate = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <CreateTemplate />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default OrganizationNewTemplate;
