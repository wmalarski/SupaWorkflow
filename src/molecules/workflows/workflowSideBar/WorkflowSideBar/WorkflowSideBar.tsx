import React from "react";
import { useOrganizationContext, useWorkflowContext } from "services";
import WorkflowSideBarView from "../WorkflowSideBarView/WorkflowSideBarView";

export type WorkflowSideBarProps = {
  View?: React.ComponentType<React.ComponentProps<typeof WorkflowSideBarView>>;
};

const WorkflowSideBar = ({
  View = WorkflowSideBarView,
}: WorkflowSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const workflow = useWorkflowContext();

  return <View organizationId={organization.id} workflowId={workflow.id} />;
};

export default React.memo(WorkflowSideBar);
