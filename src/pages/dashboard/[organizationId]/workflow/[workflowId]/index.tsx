import React from "react";
import { WorkflowEditor } from "../../../../../molecules";
import { OrganizationLayout } from "../../../../../organisms";
import {
  OrganizationContextProvider,
  WorkflowContextProvider,
  workflowProtectedRoute,
  WorkflowProtectedRouteProps,
} from "../../../../../utils";

const WorkflowPage = ({
  workflow,
  organization,
  profile,
  member,
}: WorkflowProtectedRouteProps): JSX.Element => {
  return (
    <OrganizationContextProvider
      organization={organization}
      member={member}
      profile={profile}
    >
      <WorkflowContextProvider workflow={workflow}>
        <OrganizationLayout>
          <WorkflowEditor />
        </OrganizationLayout>
      </WorkflowContextProvider>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = workflowProtectedRoute();

export default WorkflowPage;
