import React from "react";
import WorkflowEditor from "../../molecules/workflows/workflowEditor/WorkflowEditor/WorkflowEditor";
import { RepContextProvider } from "../../utils/rep/RepContext";

const WorkflowWorkspace = (): React.ReactElement => {
  return (
    <RepContextProvider>
      <WorkflowEditor />
    </RepContextProvider>
  );
};

export default WorkflowWorkspace;
