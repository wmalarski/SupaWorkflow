import WorkflowEditor from "molecules/editor/workflowEditor/WorkflowEditor/WorkflowEditor";
import React from "react";
import { useWorkflowContext } from "services";
import { RepContextProvider } from "utils/rep/RepContext";

const WorkflowWorkspace = (): React.ReactElement => {
  const workflow = useWorkflowContext();

  return (
    <RepContextProvider
      templateId={workflow.template_id}
      workflowId={workflow.id}
    >
      <WorkflowEditor />
    </RepContextProvider>
  );
};

export default WorkflowWorkspace;
