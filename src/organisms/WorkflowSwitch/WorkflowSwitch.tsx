import { WorkflowDetails } from "molecules";
import dynamic from "next/dynamic";
import React from "react";
import { useTabParam, WorkflowTab } from "utils";
import WorkflowLayout from "./WorkflowLayout";

const WorkflowWorkspace = dynamic(() => import("./WorkflowWorkspace"), {
  ssr: false,
});

const WorkflowSwitch = (): React.ReactElement => {
  const tab = useTabParam(WorkflowTab);

  return (
    <WorkflowLayout>
      {!tab && <WorkflowDetails />}
      {tab === WorkflowTab.edit && <WorkflowWorkspace />}
    </WorkflowLayout>
  );
};

export default WorkflowSwitch;
