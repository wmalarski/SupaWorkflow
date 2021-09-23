import { useWorkflowContext } from "@supa-workflow/services";
import React from "react";
import WorkflowEditor from "../../molecules/editor/workflowEditor/WorkflowEditor/WorkflowEditor";
import { RepContextProvider } from "../../utils/rep/RepContext";

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
