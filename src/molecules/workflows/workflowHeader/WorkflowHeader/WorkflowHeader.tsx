import React from "react";
import { useOrganizationContext, useWorkflowContext } from "services";
import { useTabParam, WorkflowTab } from "utils";
import WorkflowHeaderView from "../WorkflowHeaderView/WorkflowHeaderView";

export type WorkflowHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof WorkflowHeaderView>>;
};

const WorkflowHeader = ({
  View = WorkflowHeaderView,
}: WorkflowHeaderProps): React.ReactElement => {
  const tab = useTabParam(WorkflowTab);

  const workflow = useWorkflowContext();
  const organization = useOrganizationContext();

  return (
    <View tab={tab} organizationId={organization.id} workflowId={workflow.id} />
  );
};

export default React.memo(WorkflowHeader);
