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

  const { putMessage, deleteMessage } = useRepMutations();

  return (
    <View
      messages={messages}
      onDeleteClick={deleteMessage}
      onMessageChange={putMessage}
    />
  );
};

export default TemplateEditor;
