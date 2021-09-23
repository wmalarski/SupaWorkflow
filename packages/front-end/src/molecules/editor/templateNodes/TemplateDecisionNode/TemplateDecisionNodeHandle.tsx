import React from "react";
import { Position } from "react-flow-renderer";
import TemplateHandle from "../../templateForms/TemplateHandle/TemplateHandle";
import { AfterRendererProps } from "../../templateForms/TemplateListForm/TemplateListForm";

const TemplateDecisionNodeHandle = ({
  index,
  count,
}: AfterRendererProps): React.ReactElement | null => (
  <TemplateHandle
    type="source"
    position={Position.Right}
    id={String(index)}
    style={{
      top: `${Math.floor(((index + 1) * 100) / (count + 1))}%`,
    }}
  />
);

export default TemplateDecisionNodeHandle;
