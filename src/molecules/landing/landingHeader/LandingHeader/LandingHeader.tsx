import React from "react";
import LandingHeaderView from "../LandingHeaderView/LandingHeaderView";

export type LandingHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof LandingHeaderView>>;
};

const LandingHeader = ({
  View = LandingHeaderView,
}: LandingHeaderProps): React.ReactElement => {
  return <View />;
};

export default React.memo(LandingHeader);
