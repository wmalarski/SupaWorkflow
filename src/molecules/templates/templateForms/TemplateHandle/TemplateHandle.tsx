import React from "react";
import { Handle, useStoreState } from "react-flow-renderer";
import { isEdgeCycle } from "./TemplateHandle.utils";

const TemplateHandle = (
  props: React.ComponentProps<typeof Handle>
): React.ReactElement => {
  const edges = useStoreState((state) => state.edges);

  return (
    <Handle
      isValidConnection={(connection) => !isEdgeCycle({ connection, edges })}
      {...props}
    />
  );
};

export default TemplateHandle;
