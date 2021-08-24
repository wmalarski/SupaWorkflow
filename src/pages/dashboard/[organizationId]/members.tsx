import React from "react";
import { AddOrganizationMember, OrganizationMembers } from "../../../molecules";
import { OrganizationLayout } from "../../../organisms";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../utils";

const OrganizationMembersPage = ({
  organization,
  profile,
  member,
}: OrganizationProtectedRouteProps): JSX.Element => {
  return (
    <OrganizationContextProvider
      organization={organization}
      member={member}
      profile={profile}
    >
      <OrganizationLayout>
        <AddOrganizationMember />
        <OrganizationMembers />
      </OrganizationLayout>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationMembersPage;
