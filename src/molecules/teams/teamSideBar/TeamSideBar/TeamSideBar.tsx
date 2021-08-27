import React from "react";
import TeamSideBarView from "../TeamSideBarView/TeamSideBarView";

type ViewProps = React.ComponentProps<typeof TeamSideBarView>;

export type TeamSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const TeamSideBar = ({
  View = TeamSideBarView,
}: TeamSideBarProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(TeamSideBar);
