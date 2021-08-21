import React from "react";
import LandingTopView from "../LandingTopView/LandingTopView";

type ViewProps = React.ComponentProps<typeof LandingTopView>;

export type LandingTopProps = {
  View?: React.ComponentType<ViewProps>;
};

const LandingTop = ({
  View = LandingTopView,
}: LandingTopProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(LandingTop);
