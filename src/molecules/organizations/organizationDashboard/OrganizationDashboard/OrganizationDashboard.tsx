import React from "react";
import OrganizationDashboardView from "../OrganizationDashboardView/OrganizationDashboardView";

type ViewProps = React.ComponentProps<typeof OrganizationDashboardView>;

export type OrganizationDashboardProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationDashboard = ({
  View = OrganizationDashboardView,
}: OrganizationDashboardProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(OrganizationDashboard);
