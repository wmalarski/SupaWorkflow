import React from "react";
import { WorkflowEditor } from "../../../../../molecules";
import { UserNavigation } from "../../../../../organisms";
import Page from "../../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../../utils/contexts/OrganizationContext";
import { WorkflowContextProvider } from "../../../../../utils/contexts/WorkflowContext";
import {
  workflowProtectedRoute,
  WorkflowProtectedRouteProps,
} from "../../../../../utils/routing/protectedRoute";

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
