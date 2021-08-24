import React from "react";
import { OrganizationDashboard } from "../../../molecules";
import { OrganizationLayout } from "../../../organisms";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../utils";

const OrganizationIdPage = ({
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
        <OrganizationDashboard />
      </OrganizationLayout>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationIdPage;
