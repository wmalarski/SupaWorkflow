import React from "react";

export type WorkflowsListViewProps = {
  data: string;
};

const WorkflowsListView = ({ data }: WorkflowsListViewProps): JSX.Element => {
  return (
    <div>
      {`WorkflowsListView: `}
      {data}
    </div>
  );
};

export default WorkflowsListView;
