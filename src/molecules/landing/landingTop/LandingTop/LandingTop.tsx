import React from "react";
import LandingTopView from "../LandingTopView/LandingTopView";

export type LandingTopProps = {
  View?: React.ComponentType<React.ComponentProps<typeof LandingTopView>>;
};

const LandingTop = ({
  View = LandingTopView,
}: LandingTopProps): React.ReactElement => {
  return <View />;
};

export default React.memo(LandingTop);
