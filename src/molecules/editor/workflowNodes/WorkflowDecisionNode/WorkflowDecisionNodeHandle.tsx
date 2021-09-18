import React from "react";
import { Handle, Position } from "react-flow-renderer";

export type WorkflowDecisionNodeHandleProps = {
  index: number;
  count: number;
};

const WorkflowDecisionNodeHandle = ({
  index,
  count,
}: WorkflowDecisionNodeHandleProps): React.ReactElement => (
  <Handle
    type="source"
    id={String(index)}
    position={Position.Right}
    style={{
      top: `${Math.floor(((index + 1) * 100) / (count + 1))}%`,
    }}
  />
);

export default WorkflowDecisionNodeHandle;
