import dynamic from "next/dynamic";
import React from "react";
import { CreateWorkflow } from "../../molecules";
import { TemplateTab } from "../../utils/routing/types";

const TemplateWorkspace = dynamic(
  () => import("../TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

export type TemplateSwitchProps = {
  tab: TemplateTab | null;
};

const TemplateSwitch = ({ tab }: TemplateSwitchProps): JSX.Element | null => {
  switch (tab) {
    case TemplateTab.edit:
      return <TemplateWorkspace />;
    case TemplateTab.new:
      return <CreateWorkflow />;
    default:
      return null;
  }
};

export default TemplateSwitch;
