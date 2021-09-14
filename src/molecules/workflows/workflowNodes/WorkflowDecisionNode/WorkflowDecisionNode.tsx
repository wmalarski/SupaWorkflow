import React from "react";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";

const WorkflowDecisionNode = ({
  data: { message },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== MessageKind.WorkflowNode ||
    message.data.template.datatype !== MessageNodeType.Decision
  )
    return null;

  return <div>{`WorkflowDecisionNode: `}</div>;
};

export default WorkflowDecisionNode;
