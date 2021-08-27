import dynamic from "next/dynamic";
import React from "react";
import { CreateWorkflow } from "../../molecules";
import { TemplateTab, useTabParam } from "../../utils";
import TemplateLayout from "./TemplateLayout";

const TemplateWorkspace = dynamic(() => import("./TemplateWorkspace"), {
  ssr: false,
});

const TemplateSwitch = (): JSX.Element | null => {
  const tab = useTabParam(TemplateTab);

  switch (tab) {
    case TemplateTab.edit:
      return (
        <TemplateLayout>
          <TemplateWorkspace />
        </TemplateLayout>
      );
    case TemplateTab.new:
      return (
        <TemplateLayout isForm>
          <CreateWorkflow />
        </TemplateLayout>
      );
    default:
      return null;
  }
};

export default TemplateSwitch;
