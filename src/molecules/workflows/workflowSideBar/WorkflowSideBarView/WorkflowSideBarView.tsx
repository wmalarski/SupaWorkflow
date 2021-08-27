import React from "react";

export type WorkflowSideBarViewProps = {
  data: string;
};

const WorkflowSideBarView = ({
  data,
}: WorkflowSideBarViewProps): JSX.Element => {
  return (
    <div>
      {`WorkflowSideBarView: `}
      {data}
    </div>
  );
};

export default WorkflowSideBarView;
