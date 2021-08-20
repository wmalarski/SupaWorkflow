import { useRouter } from "next/router";
import React from "react";
import DashboardHeaderView from "../DashboardHeaderView/DashboardHeaderView";

type ViewProps = React.ComponentProps<typeof DashboardHeaderView>;

export type DashboardHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardHeader = ({
  View = DashboardHeaderView,
}: DashboardHeaderProps): JSX.Element => {
  const router = useRouter();

  console.log({ router });

  return <View data="hello" />;
};

export default DashboardHeader;
