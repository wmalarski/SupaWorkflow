import React from "react";
import WorkflowDetailsView from "../WorkflowDetailsView/WorkflowDetailsView";

type ViewProps = React.ComponentProps<typeof WorkflowDetailsView>;

export type WorkflowDetailsProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowDetails = ({
  View = WorkflowDetailsView,
}: WorkflowDetailsProps): React.ReactElement => {
  return <View data="hello" />;
};

export default React.memo(WorkflowDetails);
