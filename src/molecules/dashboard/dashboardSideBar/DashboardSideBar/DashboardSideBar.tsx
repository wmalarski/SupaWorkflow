import React from "react";
import { useSelectOrganizations } from "../../../../services/data/organization/selectOgranizations";
import DashboardSideBarView from "../DashboardSideBarView/DashboardSideBarView";

type ViewProps = React.ComponentProps<typeof DashboardSideBarView>;

export type DashboardSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardSideBar = ({
  View = DashboardSideBarView,
}: DashboardSideBarProps): JSX.Element => {
  const { data: organizations, isLoading } = useSelectOrganizations();

  return <View organizations={organizations} isLoading={isLoading} />;
};

export default DashboardSideBar;
