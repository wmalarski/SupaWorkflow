import React from "react";
import { useSelectOrganizations } from "services";
import DashboardSideBarView from "../DashboardSideBarView/DashboardSideBarView";

export type DashboardSideBarProps = {
  View?: React.ComponentType<React.ComponentProps<typeof DashboardSideBarView>>;
};

const DashboardSideBar = ({
  View = DashboardSideBarView,
}: DashboardSideBarProps): React.ReactElement => {
  const { data: organizations, isLoading } = useSelectOrganizations();

  return <View organizations={organizations} isLoading={isLoading} />;
};

export default React.memo(DashboardSideBar);
