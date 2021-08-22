import React from "react";
import {
  DashboardCorner,
  NewTeamMember,
  OrganizationSideBar,
} from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { GridPage } from "../../../../templates";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../utils";

const NewOrganizationTeamPage = ({
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
        <NewTeamMember />
      </GridPage>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default NewOrganizationTeamPage;
