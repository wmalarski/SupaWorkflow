import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { AfterRendererProps } from "../../templateForms/TemplateListForm/TemplateListForm";

const TemplateDecisionNodeHandle = ({
  index,
}: AfterRendererProps): React.ReactElement | null => (
  <Handle
    type="source"
    position={Position.Right}
    id={String(index)}
    style={{ top: 50 + index * 32 }}
  />
);

export default TemplateDecisionNodeHandle;
