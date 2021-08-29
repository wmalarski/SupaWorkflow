import React from "react";
import { Workflow } from "../../../../services";

export type WorkflowsListViewProps = {
  workflows?: Workflow[];
  count?: number;
};

const WorkflowsListView = ({
  workflows,
  count,
}: WorkflowsListViewProps): JSX.Element => {
  return (
    <>
      {workflows?.map((workflow) => (
        <p key={workflow.id}>{workflow.name}</p>
      ))}
    </>
  );
};

export default WorkflowsListView;
