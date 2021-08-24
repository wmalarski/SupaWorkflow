import React from "react";
import { WorkflowEditor } from "../../../../../molecules";
import { OrganizationLayout } from "../../../../../organisms";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../../utils";

const WorkflowPage = ({
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
        <WorkflowEditor />
      </OrganizationLayout>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default WorkflowPage;
