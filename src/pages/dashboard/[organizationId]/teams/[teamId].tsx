import React from "react";
import { NewTeamMember, OrganizationTeam } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../utils";

const OrganizationTeamPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <NewTeamMember />
      <OrganizationTeam />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default OrganizationTeamPage;
