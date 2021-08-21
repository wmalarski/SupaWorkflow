import React from "react";
import { WorkflowEditor } from "../../../../../molecules";
import { UserNavigation } from "../../../../../organisms";
import Page from "../../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../../utils/profile/ProfileContext";
import {
  workflowProtectedRoute,
  WorkflowProtectedRouteProps,
} from "../../../../../utils/routing/protectedRoute";
import { WorkflowContextProvider } from "../../../../../utils/workflow/WorkflowContext";

const WorkflowPage = ({
  workflow,
  organization,
  profile,
  member,
}: WorkflowProtectedRouteProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
        <WorkflowContextProvider workflow={workflow}>
          <Page header={<UserNavigation />}>
            <WorkflowEditor />
          </Page>
        </WorkflowContextProvider>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps = workflowProtectedRoute;

export default WorkflowPage;
