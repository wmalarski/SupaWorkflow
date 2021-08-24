import React from "react";
import { AddOrganizationMember, OrganizationMembers } from "../../../molecules";
import { OrganizationLayout } from "../../../organisms";
import { RouteOrganizationContextProvider } from "../../../utils";

const OrganizationMembersPage = (): JSX.Element => {
  return (
    <RouteOrganizationContextProvider>
      <OrganizationLayout>
        <AddOrganizationMember />
        <OrganizationMembers />
      </OrganizationLayout>
    </RouteOrganizationContextProvider>
  );
};

export default OrganizationMembersPage;
