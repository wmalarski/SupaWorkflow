import { CreateWorkflow, TemplateDetails } from "molecules";
import dynamic from "next/dynamic";
import React from "react";
import { TemplateTab, useTabParam } from "utils";
import TemplateLayout from "./TemplateLayout";

const TemplateWorkspace = dynamic(() => import("./TemplateWorkspace"), {
  ssr: false,
});

const TemplateSwitch = (): React.ReactElement | null => {
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
      return (
        <TemplateLayout>
          <TemplateDetails />
        </TemplateLayout>
      );
  }
};

export default TemplateSwitch;
