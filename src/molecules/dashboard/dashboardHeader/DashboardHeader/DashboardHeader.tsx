import React from "react";
import { DashboardTab, useTabParam } from "../../../../utils";
import DashboardHeaderView from "../DashboardHeaderView/DashboardHeaderView";

type ViewProps = React.ComponentProps<typeof DashboardHeaderView>;

export type DashboardHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardHeader = ({
  View = DashboardHeaderView,
}: DashboardHeaderProps): JSX.Element => {
  const tab = useTabParam(DashboardTab);

  return <View tab={tab} />;
};

export default React.memo(DashboardHeader);
