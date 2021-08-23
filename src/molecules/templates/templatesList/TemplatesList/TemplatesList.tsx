import React from "react";
import { useSelectTemplates } from "../../../../services";
import { useOrganizationContext } from "../../../../utils";
import TemplatesListView from "../TemplatesListView/TemplatesListView";

type ViewProps = React.ComponentProps<typeof TemplatesListView>;

export type TemplatesListProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplatesList = ({
  View = TemplatesListView,
}: TemplatesListProps): JSX.Element => {
  const { organization } = useOrganizationContext();

  const { data: templates, isLoading } = useSelectTemplates({
    organization_id: organization.id,
  });

  return (
    <View
      organizationId={organization.id}
      templates={templates}
      isLoading={isLoading}
    />
  );
};

export default React.memo(TemplatesList);
