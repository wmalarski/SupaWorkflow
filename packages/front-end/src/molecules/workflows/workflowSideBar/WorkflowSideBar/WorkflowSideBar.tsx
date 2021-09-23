import {
  useOrganizationContext,
  useWorkflowContext,
} from "@supa-workflow/services";
import React from "react";
import WorkflowSideBarView from "../WorkflowSideBarView/WorkflowSideBarView";

type ViewProps = React.ComponentProps<typeof WorkflowSideBarView>;

export type WorkflowSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowSideBar = ({
  View = WorkflowSideBarView,
}: WorkflowSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const workflow = useWorkflowContext();

  return <View organizationId={organization.id} workflowId={workflow.id} />;
};

export default React.memo(WorkflowSideBar);