import React from "react";
import { useSelectOrganizations } from "services";
import { DashboardTab, useTabParam } from "utils";
import DashboardSideBarView from "../DashboardSideBarView/DashboardSideBarView";

export type DashboardSideBarProps = {
  View?: React.ComponentType<React.ComponentProps<typeof DashboardSideBarView>>;
};

const DashboardSideBar = ({
  View = DashboardSideBarView,
}: DashboardSideBarProps): React.ReactElement => {
  const { data: organizations, isLoading } = useSelectOrganizations();

  const tab = useTabParam(DashboardTab);

  return <View organizations={organizations} isLoading={isLoading} tab={tab} />;
};

export default React.memo(DashboardSideBar);
