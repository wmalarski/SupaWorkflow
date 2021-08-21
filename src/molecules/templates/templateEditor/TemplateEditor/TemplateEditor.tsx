import React from "react";
import { useMessages } from "../../../../utils/rep";
import { useRepMutations } from "../../../../utils/rep/RepContext";
import TemplateEditorView from "../TemplateEditorView/TemplateEditorView";

type ViewProps = React.ComponentProps<typeof TemplateEditorView>;

export type TemplateEditorProps = {
  View?: React.ComponentType<ViewProps>;
  templateId: number;
};

const TemplateEditor = ({
  View = TemplateEditorView,
  templateId,
}: TemplateEditorProps): JSX.Element => {
  const messages = useMessages({ templateId });

  const { putMessage: putMessage, delMessage: deleteMessage } =
    useRepMutations();

  return (
    <View
      templateId={templateId}
      messages={messages}
      onDeleteClick={deleteMessage}
      onMessageChange={putMessage}
    />
  );
};

export default TemplateEditor;
