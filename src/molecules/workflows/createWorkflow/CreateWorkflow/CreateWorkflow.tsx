import React from "react";
import CreateWorkflowView from "../CreateWorkflowView/CreateWorkflowView";

type ViewProps = React.ComponentProps<typeof CreateWorkflowView>;

export type CreateWorkflowProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateWorkflow = ({
  View = CreateWorkflowView,
}: CreateWorkflowProps): JSX.Element => {
  return <View data="hello" />;
};

export default CreateWorkflow;
