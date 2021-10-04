import React from "react";
import DashboardCornerView from "../DashboardCornerView/DashboardCornerView";

export type DashboardCornerProps = {
  View?: React.ComponentType<React.ComponentProps<typeof DashboardCornerView>>;
};

const DashboardCorner = ({
  View = DashboardCornerView,
}: DashboardCornerProps): React.ReactElement => {
  return <View />;
};

export default React.memo(DashboardCorner);
