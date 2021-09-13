import React from "react";
import { Position } from "react-flow-renderer";
import TemplateHandle from "../../templateForms/TemplateHandle/TemplateHandle";
import { AfterRendererProps } from "../../templateForms/TemplateListForm/TemplateListForm";

const TemplateDecisionNodeHandle = ({
  index,
}: AfterRendererProps): React.ReactElement | null => (
  <TemplateHandle
    type="source"
    position={Position.Right}
    id={String(index)}
    style={{ top: 50 + index * 32 }}
  />
);

export default TemplateDecisionNodeHandle;
