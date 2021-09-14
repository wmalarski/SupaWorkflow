import React from "react";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";

const WorkflowFormNode = ({
  data: { teams, message, onChange },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.FormWorkflow
  )
    return null;

  return <div>{`WorkflowChecklistNode: `}</div>;
};

export default WorkflowFormNode;
