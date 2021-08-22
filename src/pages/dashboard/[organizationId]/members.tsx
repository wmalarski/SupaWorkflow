import React from "react";
import {
  AddOrganizationMember,
  DashboardCorner,
  OrganizationMembers,
  OrganizationSideBar,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { GridPage } from "../../../templates";
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
      <GridPage
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<OrganizationSideBar />}
      >
        <AddOrganizationMember />
        <OrganizationMembers />
      </GridPage>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationMembersPage;
