import {
  useOrganizationContext,
  useSelectTemplates,
} from "@supa-workflow/services";
import React, { useState } from "react";
import TemplatesListView from "../TemplatesListView/TemplatesListView";

type ViewProps = React.ComponentProps<typeof TemplatesListView>;

const PAGE_SIZE = 10;

export type TemplatesListProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplatesList = ({
  View = TemplatesListView,
}: TemplatesListProps): React.ReactElement => {
  const organization = useOrganizationContext();

  const [page, setPage] = useState(0);

  const { data: templates, isLoading } = useSelectTemplates({
    organization_id: organization.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  return (
    <View
      organizationId={organization.id}
      templates={templates?.entries}
      count={templates?.count}
      isLoading={isLoading}
      onPageChange={setPage}
      page={page}
      pageSize={PAGE_SIZE}
    />
  );
};

export default React.memo(TemplatesList);
