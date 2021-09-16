import dynamic from "next/dynamic";
import React from "react";
import { useTabParam, WorkflowTab } from "../../utils";
import WorkflowLayout from "./WorkflowLayout";

const WorkflowWorkspace = dynamic(() => import("./WorkflowWorkspace"), {
  ssr: false,
});

const WorkflowSwitch = (): React.ReactElement | null => {
  const tab = useTabParam(WorkflowTab);

  switch (tab) {
    case WorkflowTab.edit:
      return (
        <WorkflowLayout>
          <WorkflowWorkspace />
        </WorkflowLayout>
      );
    default:
      return null;
  }
};

export default WorkflowSwitch;
