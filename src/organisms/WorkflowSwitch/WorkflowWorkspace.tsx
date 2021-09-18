import React from "react";
import WorkflowEditor from "../../molecules/workflows/workflowEditor/WorkflowEditor/WorkflowEditor";
import { useTemplateContext, useWorkflowContext } from "../../utils";
import { RepContextProvider } from "../../utils/rep/RepContext";

const WorkflowWorkspace = (): React.ReactElement => {
  const template = useTemplateContext();
  const workflow = useWorkflowContext();

  return (
    <RepContextProvider templateId={template.id} workflowId={workflow.id}>
      <WorkflowEditor />
    </RepContextProvider>
  );
};

export default WorkflowWorkspace;
