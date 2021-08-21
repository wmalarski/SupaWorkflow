import React from "react";
import AnonHeaderView from "../AnonHeaderView/AnonHeaderView";

type ViewProps = React.ComponentProps<typeof AnonHeaderView>;

export type AnonHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const AnonHeader = ({
  View = AnonHeaderView,
}: AnonHeaderProps): JSX.Element => {
  return <View />;
};

export default React.memo(AnonHeader);
