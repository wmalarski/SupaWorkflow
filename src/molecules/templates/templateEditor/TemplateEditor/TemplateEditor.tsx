import React from "react";
import { useTemplateContext } from "../../../../utils";
import { useMessages } from "../../../../utils/rep";
import { useRepMutations } from "../../../../utils/rep/RepContext";
import TemplateEditorView from "../TemplateEditorView/TemplateEditorView";

type ViewProps = React.ComponentProps<typeof TemplateEditorView>;

export type TemplateEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateEditor = ({
  View = TemplateEditorView,
}: TemplateEditorProps): JSX.Element => {
  const template = useTemplateContext();

  const messages = useMessages({ templateId: template.id });

  const { putMessage: putMessage, delMessage: deleteMessage } =
    useRepMutations();

  return (
    <View
      templateId={template.id}
      messages={messages}
      onDelete={deleteMessage}
      onChange={putMessage}
    />
  );
};

export default React.memo(TemplateEditor);
