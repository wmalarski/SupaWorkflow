import React from "react";
import { useSelectOrganizations } from "../../../../services";
import DashboardOrganizationsView from "../DashboardOrganizationsView/DashboardOrganizationsView";

type ViewProps = React.ComponentProps<typeof DashboardOrganizationsView>;

export type DashboardOrganizationsProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardOrganizations = ({
  View = DashboardOrganizationsView,
}: DashboardOrganizationsProps): JSX.Element => {
  const { data: organizations, isLoading } = useSelectOrganizations();

  console.log({ organizations });

  return <View organizations={organizations} isLoading={isLoading} />;
};

export default React.memo(DashboardOrganizations);
