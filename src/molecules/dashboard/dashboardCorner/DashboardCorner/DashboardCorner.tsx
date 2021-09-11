import React from "react";
import DashboardCornerView from "../DashboardCornerView/DashboardCornerView";

type ViewProps = React.ComponentProps<typeof DashboardCornerView>;

export type DashboardCornerProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardCorner = ({
  View = DashboardCornerView,
}: DashboardCornerProps): React.ReactElement => {
  return <View />;
};

export default React.memo(DashboardCorner);
