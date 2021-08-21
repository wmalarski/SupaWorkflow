import React from "react";
import TemplateEditor from "../../molecules/templates/templateEditor/TemplateEditor/TemplateEditor";
import { RepContextProvider } from "../../utils";

export type TemplateWorkspaceProps = {
  templateId: number;
};

const TemplateWorkspace = ({
  templateId,
}: TemplateWorkspaceProps): JSX.Element => {
  return (
    <RepContextProvider>
      <TemplateEditor templateId={templateId} />
    </RepContextProvider>
  );
};

export default TemplateWorkspace;
