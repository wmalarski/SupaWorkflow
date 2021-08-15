import React from "react";
import { TemplateEditor } from "../../molecules";
import { RepContextProvider } from "../../utils/rep/RepContext";

const TemplateWorkspace = (): JSX.Element => {
  return (
    <RepContextProvider>
      <TemplateEditor />
    </RepContextProvider>
  );
};

export default TemplateWorkspace;
