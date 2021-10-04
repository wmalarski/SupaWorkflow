import { CreateWorkflow, TemplateDetails } from "molecules";
import dynamic from "next/dynamic";
import React from "react";
import { useOrganizationContext, useTemplateContext } from "services";
import { ModalLayer } from "templates";
import {
  paths,
  TemplateDialog,
  TemplateTab,
  useDialogParam,
  useTabParam,
} from "utils";
import TemplateLayout from "./TemplateLayout";

const TemplateWorkspace = dynamic(() => import("./TemplateWorkspace"), {
  ssr: false,
});

const TemplateSwitch = (): React.ReactElement | null => {
  const tab = useTabParam(TemplateTab);
  const dialog = useDialogParam(TemplateDialog);

  const organization = useOrganizationContext();
  const template = useTemplateContext();

  const resetUrl = paths.template({
    organizationId: organization.id,
    templateId: template.id,
    tab,
  });

  return (
    <>
      <TemplateLayout>
        {tab === TemplateTab.edit && <TemplateWorkspace />}
        {!tab && <TemplateDetails />}
      </TemplateLayout>
      <ModalLayer isOpen={!!dialog} resetUrl={resetUrl}>
        {dialog === TemplateDialog.new && <CreateWorkflow />}
      </ModalLayer>
    </>
  );
};

export default TemplateSwitch;
