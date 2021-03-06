import React from "react";
import { useOrganizationContext, useTemplateContext } from "services";
import { TemplateTab, useTabParam } from "utils";
import TemplateHeaderView from "../TemplateHeaderView/TemplateHeaderView";

export type TemplateHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof TemplateHeaderView>>;
};

const TemplateHeader = ({
  View = TemplateHeaderView,
}: TemplateHeaderProps): React.ReactElement => {
  const tab = useTabParam(TemplateTab);

  const template = useTemplateContext();
  const organization = useOrganizationContext();

  return (
    <View tab={tab} templateId={template.id} organizationId={organization.id} />
  );
};

export default React.memo(TemplateHeader);
