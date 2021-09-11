import React from "react";
import LandingTopView from "../LandingTopView/LandingTopView";

type ViewProps = React.ComponentProps<typeof LandingTopView>;

export type LandingTopProps = {
  View?: React.ComponentType<ViewProps>;
};

const LandingTop = ({
  View = LandingTopView,
}: LandingTopProps): React.ReactElement => {
  return <View />;
};

export default React.memo(LandingTop);
