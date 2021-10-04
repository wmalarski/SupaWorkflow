import React from "react";
import OrganizationDashboardView from "../OrganizationDashboardView/OrganizationDashboardView";

export type OrganizationDashboardProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof OrganizationDashboardView>
  >;
};

const OrganizationDashboard = ({
  View = OrganizationDashboardView,
}: OrganizationDashboardProps): React.ReactElement => {
  return <View data="hello" />;
};

export default React.memo(OrganizationDashboard);
