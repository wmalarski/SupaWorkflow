import React from "react";
import AnonHeaderView from "../AnonHeaderView/AnonHeaderView";

export type AnonHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof AnonHeaderView>>;
};

const AnonHeader = ({
  View = AnonHeaderView,
}: AnonHeaderProps): React.ReactElement => {
  return <View />;
};

export default React.memo(AnonHeader);
