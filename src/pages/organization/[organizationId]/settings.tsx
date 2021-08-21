import React from "react";
import {
  DashboardCorner,
  OrganizationSettings,
  OrganizationSideBar,
} from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { GridPage } from "../../../templates";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../utils";

const OrganizationSettingsPage = ({
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
        <OrganizationSettings />
      </GridPage>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute(["owner", "mod"]);

export default OrganizationSettingsPage;
