import React from "react";
import TemplateEditor from "../../molecules/templates/templateEditor/TemplateEditor/TemplateEditor";
import { RepContextProvider } from "../../utils/rep/RepContext";

const TemplateWorkspace = (): React.ReactElement => {
  return (
    <RepContextProvider>
      <TemplateEditor />
    </RepContextProvider>
  );
};

export default TemplateWorkspace;
