import React from "react";
import WorkflowsListView from "../WorkflowsListView/WorkflowsListView";

type ViewProps = React.ComponentProps<typeof WorkflowsListView>;

export type WorkflowsListProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowsList = ({
  View = WorkflowsListView,
}: WorkflowsListProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(WorkflowsList);
