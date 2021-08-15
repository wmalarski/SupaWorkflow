import React from "react";
import {
  useCreateMessage,
  useMessages,
} from "../../../../services/rep/messages";
import { RepContextProvider } from "../../../../utils/rep/RepContext";
import TemplateEditorView from "../TemplateEditorView/TemplateEditorView";

type ViewProps = React.ComponentProps<typeof TemplateEditorView>;

export type TemplateEditorProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateEditor = ({
  View = TemplateEditorView,
}: TemplateEditorProps): JSX.Element => {
  const todos = useMessages();

  const { mutate: handleNewMessageClick } = useCreateMessage();

  return (
    <RepContextProvider>
      <View todos={todos} onNewMessageClick={handleNewMessageClick} />
    </RepContextProvider>
  );
};

export default TemplateEditor;
