import React from "react";
import HeaderLandingView from "../HeaderLandingView/HeaderLandingView";

type ViewProps = React.ComponentProps<typeof HeaderLandingView>;

export type HeaderLandingProps = {
  View?: React.ComponentType<ViewProps>;
};

const HeaderLanding = ({
  View = HeaderLandingView,
}: HeaderLandingProps): JSX.Element => {
  return <View data="hello" />;
};

export default HeaderLanding;
