import React from "react";
import { WorkflowEditor } from "../../molecules";
import { useTabParam, WorkflowTab } from "../../utils";
import WorkflowLayout from "./WorkflowLayout";

const WorkflowSwitch = (): JSX.Element | null => {
  const tab = useTabParam(WorkflowTab);

  switch (tab) {
    case WorkflowTab.edit:
      return (
        <WorkflowLayout>
          <WorkflowEditor />
        </WorkflowLayout>
      );
    default:
      return null;
  }
};

export default WorkflowSwitch;
