import React from "react";
import { TemplatesList } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../utils";

const TemplatesPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <TemplatesList />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default TemplatesPage;
