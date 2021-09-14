import React from "react";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";

const WorkflowDecisionNode = ({
  data: { teams, message, onChange },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.DecisionWorkflow
  )
    return null;

  return <div>{`WorkflowDecisionNode: `}</div>;
};

export default WorkflowDecisionNode;
