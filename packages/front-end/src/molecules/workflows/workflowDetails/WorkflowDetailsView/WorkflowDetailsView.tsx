import React from "react";

export type WorkflowDetailsViewProps = {
  data: string;
};

const WorkflowDetailsView = ({
  data,
}: WorkflowDetailsViewProps): React.ReactElement => {
  return (
    <div>
      {`WorkflowDetailsView: `}
      {data}
    </div>
  );
};

export default WorkflowDetailsView;
