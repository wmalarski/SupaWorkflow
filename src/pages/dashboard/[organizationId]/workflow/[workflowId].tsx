import React from "react";
import { WorkflowSwitch } from "../../../../organisms";
import {
  GetWorkflowProps,
  getWorkflowProps,
  OrganizationContextProvider,
  WorkflowContextProvider,
} from "../../../../utils";

const WorkflowPage = ({
  member,
  profile,
  workflow,
  organization,
}: GetWorkflowProps): React.ReactElement => (
  <OrganizationContextProvider
    member={member}
    profile={profile}
    organization={organization}
  >
    <WorkflowContextProvider workflow={workflow}>
      <WorkflowSwitch />
    </WorkflowContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = getWorkflowProps;

export default WorkflowPage;
