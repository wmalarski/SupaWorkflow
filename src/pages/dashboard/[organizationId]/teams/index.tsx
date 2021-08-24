import React from "react";
import { OrganizationTeams } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../utils";

const OrganizationTeamsPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <OrganizationTeams />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default OrganizationTeamsPage;
