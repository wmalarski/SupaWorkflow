import React from "react";
import { useMessages } from "../../../../utils/rep/messages";
import { useRepMutations } from "../../../../utils/rep/RepContext";
import TemplateEditorView from "../TemplateEditorView/TemplateEditorView";

type ViewProps = React.ComponentProps<typeof TemplateEditorView>;

export type TemplateEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateEditor = ({
  View = TemplateEditorView,
}: TemplateEditorProps): JSX.Element => {
  const messages = useMessages();

  const { createMessage } = useRepMutations();

  return <View messages={messages} onNewMessageClick={createMessage} />;
};

export default TemplateEditor;
