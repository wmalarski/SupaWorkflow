import React from "react";
import WorkflowEditorView from "../WorkflowEditorView/WorkflowEditorView";

type ViewProps = React.ComponentProps<typeof WorkflowEditorView>;

export type WorkflowEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowEditor = ({
  View = WorkflowEditorView,
}: WorkflowEditorProps): JSX.Element => {
  return <View data="hello" />;
};

export default WorkflowEditor;
