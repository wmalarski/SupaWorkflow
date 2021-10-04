import React, { useState } from "react";
import { useOrganizationContext, useSelectWorkflows } from "services";
import WorkflowsListView from "../WorkflowsListView/WorkflowsListView";

const PAGE_SIZE = 10;

export type WorkflowsListProps = {
  View?: React.ComponentType<React.ComponentProps<typeof WorkflowsListView>>;
};

const WorkflowsList = ({
  View = WorkflowsListView,
}: WorkflowsListProps): React.ReactElement => {
  const organization = useOrganizationContext();

  const [page, setPage] = useState(0);

  const { data, isLoading } = useSelectWorkflows({
    organization_id: organization.id,
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

export default React.memo(WorkflowsList);
