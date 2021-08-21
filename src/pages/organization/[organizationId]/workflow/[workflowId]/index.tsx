import React from "react";
import { WorkflowEditor } from "../../../../../molecules";
import { UserNavigation } from "../../../../../organisms";
import { Page } from "../../../../../templates";
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
        <Page header={<UserNavigation />}>
          <WorkflowEditor />
        </Page>
      </WorkflowContextProvider>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = workflowProtectedRoute;

export default WorkflowPage;
