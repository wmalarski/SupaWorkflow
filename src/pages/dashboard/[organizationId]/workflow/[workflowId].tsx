import React from "react";
import { WorkflowSwitch } from "../../../../organisms";
import {
  OrganizationContextProvider,
  useNumberParam,
  useUserContext,
  WorkflowContextProvider,
} from "../../../../utils";

const WorkflowPage = (): React.ReactElement | null => {
  const { user } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const workflowId = useNumberParam("workflowId");

  return user && workflowId && organizationId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
    >
      <WorkflowContextProvider workflowId={workflowId}>
        <WorkflowSwitch />
      </WorkflowContextProvider>
    </OrganizationContextProvider>
  ) : null;
};

export default WorkflowPage;
