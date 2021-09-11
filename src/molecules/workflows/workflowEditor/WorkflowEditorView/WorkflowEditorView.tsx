import React from "react";

export type WorkflowEditorViewProps = {
  data: string;
};

const WorkflowEditorView = ({
  data,
}: WorkflowEditorViewProps): React.ReactElement => {
  return (
    <div>
      {`WorkflowEditorView: `}
      {data}
    </div>
  );
};

export default WorkflowEditorView;
