import React from "react";
import TemplateSideBarView from "../TemplateSideBarView/TemplateSideBarView";

type ViewProps = React.ComponentProps<typeof TemplateSideBarView>;

export type TemplateSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const TemplateSideBar = ({
  View = TemplateSideBarView,
}: TemplateSideBarProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(TemplateSideBar);
