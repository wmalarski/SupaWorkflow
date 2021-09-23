import {
  useOrganizationContext,
  useTemplateContext,
} from "@supa-workflow/services";
import React from "react";
import TemplateSideBarView from "../TemplateSideBarView/TemplateSideBarView";

type ViewProps = React.ComponentProps<typeof TemplateSideBarView>;

export type TemplateSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateSideBar = ({
  View = TemplateSideBarView,
}: TemplateSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const template = useTemplateContext();

  return <View organizationId={organization.id} templateId={template.id} />;
};

export default React.memo(TemplateSideBar);
