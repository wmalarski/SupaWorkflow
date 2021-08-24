import React from "react";
import { OrganizationSettings } from "../../../molecules";
import { OrganizationLayout } from "../../../organisms";
import { RouteOrganizationContextProvider } from "../../../utils";

const OrganizationSettingsPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <OrganizationSettings />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default OrganizationSettingsPage;
