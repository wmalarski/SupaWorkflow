import { useSelectOrganizations } from "@supa-workflow/services";
import React from "react";
import DashboardSideBarView from "../DashboardSideBarView/DashboardSideBarView";

type ViewProps = React.ComponentProps<typeof DashboardSideBarView>;

export type DashboardSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const DashboardSideBar = ({
  View = DashboardSideBarView,
}: DashboardSideBarProps): React.ReactElement => {
  const { data: organizations, isLoading } = useSelectOrganizations();

  return <View organizations={organizations} isLoading={isLoading} />;
};

export default React.memo(DashboardSideBar);
