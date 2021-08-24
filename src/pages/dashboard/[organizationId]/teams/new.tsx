import React from "react";
import { NewTeamMember } from "../../../../molecules";
import { OrganizationLayout } from "../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../utils";

const NewOrganizationTeamPage = (): JSX.Element => (
  <RouteOrganizationContextProvider>
    <OrganizationLayout>
      <NewTeamMember />
    </OrganizationLayout>
  </RouteOrganizationContextProvider>
);

export default NewOrganizationTeamPage;
