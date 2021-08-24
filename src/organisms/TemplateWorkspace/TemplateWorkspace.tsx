import React from "react";
import TemplateEditor from "../../molecules/templates/templateEditor/TemplateEditor/TemplateEditor";
import { useTemplateContext } from "../../utils";
import { RepContextProvider } from "../../utils/rep/RepContext";

const TemplateWorkspace = (): JSX.Element => {
  const template = useTemplateContext();

  return (
    <RepContextProvider>
      <TemplateEditor templateId={template.id} />
    </RepContextProvider>
  );
};

export default TemplateWorkspace;
