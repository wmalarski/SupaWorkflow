import React from "react";
import { useOrganizationContext, useTemplateContext } from "services";
import { TemplateTab, useTabParam } from "utils";
import TemplateSideBarView from "../TemplateSideBarView/TemplateSideBarView";

export type TemplateSideBarProps = {
  View?: React.ComponentType<React.ComponentProps<typeof TemplateSideBarView>>;
};

const TemplateSideBar = ({
  View = TemplateSideBarView,
}: TemplateSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const template = useTemplateContext();

  const tab = useTabParam(TemplateTab);

  return (
    <View organizationId={organization.id} templateId={template.id} tab={tab} />
  );
};

export default React.memo(TemplateSideBar);
