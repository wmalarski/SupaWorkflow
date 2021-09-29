import TemplateEditor from "molecules/editor/templateEditor/TemplateEditor/TemplateEditor";
import React from "react";
import { useTemplateContext } from "services";
import { RepContextProvider } from "utils/rep/RepContext";

const TemplateWorkspace = (): React.ReactElement => {
  const template = useTemplateContext();

  return (
    <RepContextProvider templateId={template.id}>
      <TemplateEditor />
    </RepContextProvider>
  );
};

export default TemplateWorkspace;
