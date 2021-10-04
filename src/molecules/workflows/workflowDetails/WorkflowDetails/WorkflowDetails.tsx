import React from "react";
import WorkflowDetailsView from "../WorkflowDetailsView/WorkflowDetailsView";

export type WorkflowDetailsProps = {
  View?: React.ComponentType<React.ComponentProps<typeof WorkflowDetailsView>>;
};

const WorkflowDetails = ({
  View = WorkflowDetailsView,
}: WorkflowDetailsProps): React.ReactElement => {
  return <View data="hello" />;
};

export default React.memo(WorkflowDetails);
