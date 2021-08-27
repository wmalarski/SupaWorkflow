import React from "react";
import WorkflowSideBarView from "../WorkflowSideBarView/WorkflowSideBarView";

type ViewProps = React.ComponentProps<typeof WorkflowSideBarView>;

export type WorkflowSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowSideBar = ({
  View = WorkflowSideBarView,
}: WorkflowSideBarProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(WorkflowSideBar);
