import React, { useState } from "react";
import {
  useOrganizationContext,
  useSelectWorkflows,
  useTemplateContext,
} from "services";
import TemplateDetailsView from "../TemplateDetailsView/TemplateDetailsView";

export type TemplateDetailsProps = {
  View?: React.ComponentType<React.ComponentProps<typeof TemplateDetailsView>>;
};

const PAGE_SIZE = 10;

const TemplateDetails = ({
  View = TemplateDetailsView,
}: TemplateDetailsProps): React.ReactElement => {
  const template = useTemplateContext();
  const organization = useOrganizationContext();

  const [page, setPage] = useState(0);

  const { data, isLoading } = useSelectWorkflows({
    organization_id: organization.id,
    template_id: template.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  return (
    <View
      workflows={data?.entries}
      count={data?.count}
      onPageChange={setPage}
      page={page}
      pageSize={PAGE_SIZE}
      isLoading={isLoading}
    />
  );
};

export default React.memo(TemplateDetails);
