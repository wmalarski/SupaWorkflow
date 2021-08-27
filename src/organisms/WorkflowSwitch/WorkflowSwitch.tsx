import React from "react";
import { WorkflowEditor } from "../../molecules";
import { useTabParam, WorkflowTab } from "../../utils";
import WorkspaceLayout from "./WorkspaceLayout";

const WorkflowSwitch = (): JSX.Element | null => {
  const tab = useTabParam(WorkflowTab);

  switch (tab) {
    case WorkflowTab.edit:
      return (
        <WorkspaceLayout>
          <WorkflowEditor />
        </WorkspaceLayout>
      );
    default:
      return null;
  }
};

export default WorkflowSwitch;
