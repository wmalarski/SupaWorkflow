import React from "react";
import { useOrganizationContext, useTemplateContext } from "services";
import TemplateSideBarView from "../TemplateSideBarView/TemplateSideBarView";

export type TemplateSideBarProps = {
  View?: React.ComponentType<React.ComponentProps<typeof TemplateSideBarView>>;
};

const TemplateSideBar = ({
  View = TemplateSideBarView,
}: TemplateSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const template = useTemplateContext();

  return <View organizationId={organization.id} templateId={template.id} />;
};

export default React.memo(TemplateSideBar);
