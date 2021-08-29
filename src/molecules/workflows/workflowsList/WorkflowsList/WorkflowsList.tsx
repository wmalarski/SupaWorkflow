import React, { useState } from "react";
import { useSelectWorkflows } from "../../../../services";
import { useOrganizationContext } from "../../../../utils";
import WorkflowsListView from "../WorkflowsListView/WorkflowsListView";

type ViewProps = React.ComponentProps<typeof WorkflowsListView>;

const PAGE_SIZE = 10;

export type WorkflowsListProps = {
  View?: React.ComponentType<ViewProps>;
};

const WorkflowsList = ({
  View = WorkflowsListView,
}: WorkflowsListProps): JSX.Element => {
  const { organization } = useOrganizationContext();

  const [page, setPage] = useState(0);

  const { data, isLoading } = useSelectWorkflows({
    organization_id: organization.id,
    from: page * PAGE_SIZE,
    to: (page + 1) * PAGE_SIZE,
  });

  return <View workflows={data?.entries} count={data?.count} />;
};

export default React.memo(WorkflowsList);
