import {
  useOrganizationContext,
  useTemplateContext,
} from "@supa-workflow/services";
import React from "react";
import { TemplateTab, useTabParam } from "../../../../utils";
import TemplateHeaderView from "../TemplateHeaderView/TemplateHeaderView";

type ViewProps = React.ComponentProps<typeof TemplateHeaderView>;

export type TemplateHeaderProps = {
  View?: React.ComponentType<ViewProps>;
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
