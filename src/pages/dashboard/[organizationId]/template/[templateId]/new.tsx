import React from "react";
import { CreateWorkflow } from "../../../../../molecules";
import { OrganizationLayout } from "../../../../../organisms";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../../utils";

const OrganizationTemplatePage = ({
  organization,
  profile,
  member,
}: OrganizationProtectedRouteProps): JSX.Element => (
  <OrganizationContextProvider
    organization={organization}
    member={member}
    profile={profile}
  >
    <OrganizationLayout>
      <CreateWorkflow />
    </OrganizationLayout>
  </OrganizationContextProvider>
);

export const getServerSideProps = organizationProtectedRoute();

export default OrganizationTemplatePage;
