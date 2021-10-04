import React from "react";
import { DashboardTab, useTabParam } from "utils";
import DashboardHeaderView from "../DashboardHeaderView/DashboardHeaderView";

export type DashboardHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof DashboardHeaderView>>;
};

const DashboardHeader = ({
  View = DashboardHeaderView,
}: DashboardHeaderProps): React.ReactElement => {
  const tab = useTabParam(DashboardTab);

  return <View tab={tab} />;
};

export default React.memo(DashboardHeader);
