import React from "react";
import LandingHeaderView from "../LandingHeaderView/LandingHeaderView";

type ViewProps = React.ComponentProps<typeof LandingHeaderView>;

export type LandingHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const LandingHeader = ({
  View = LandingHeaderView,
}: LandingHeaderProps): JSX.Element => {
  return <View />;
};

export default React.memo(LandingHeader);
