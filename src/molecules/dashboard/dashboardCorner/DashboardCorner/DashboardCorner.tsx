import React from "react";
import DashboardCornerView from "../DashboardCornerView/DashboardCornerView";

type ViewProps = React.ComponentProps<typeof DashboardCornerView>;

export type DashboardCornerProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardCorner = ({
  View = DashboardCornerView,
}: DashboardCornerProps): JSX.Element => {
  return <View />;
};

export default DashboardCorner;
