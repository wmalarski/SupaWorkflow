import React from "react";
import { WorkflowEditor } from "../../molecules";
import { WorkflowTab } from "../../utils";

export type WorkflowSwitchProps = {
  tab: WorkflowTab | null;
};

const WorkflowSwitch = ({ tab }: WorkflowSwitchProps): JSX.Element | null => {
  switch (tab) {
    case WorkflowTab.edit:
      return <WorkflowEditor />;
    default:
      return null;
  }
};

export default WorkflowSwitch;
