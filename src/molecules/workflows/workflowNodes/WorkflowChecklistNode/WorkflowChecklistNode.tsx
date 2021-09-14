import React from "react";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";

const WorkflowChecklistNode = ({
  data: { teams, message, onChange },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.ChecklistWorkflow
  )
    return null;

  return <div>{`WorkflowChecklistNode: `}</div>;
};

export default WorkflowChecklistNode;
