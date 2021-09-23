import React from "react";
import {
  useOrganizationContext,
  useTabParam,
  useWorkflowContext,
  WorkflowTab,
} from "../../../../utils";
import WorkflowHeaderView from "../WorkflowHeaderView/WorkflowHeaderView";

type ViewProps = React.ComponentProps<typeof WorkflowHeaderView>;

export type WorkflowHeaderProps = {
  View?: React.ComponentType<ViewProps>;
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
