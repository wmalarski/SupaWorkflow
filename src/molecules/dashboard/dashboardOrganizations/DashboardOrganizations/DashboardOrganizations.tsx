import React from "react";
import { useSelectOrganizations } from "services";
import DashboardOrganizationsView from "../DashboardOrganizationsView/DashboardOrganizationsView";

export type DashboardOrganizationsProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof DashboardOrganizationsView>
  >;
};

const DashboardOrganizations = ({
  View = DashboardOrganizationsView,
}: DashboardOrganizationsProps): React.ReactElement => {
  const { data: organizations, isLoading } = useSelectOrganizations();

  return <View organizations={organizations} isLoading={isLoading} />;
};

export default React.memo(DashboardOrganizations);
