import React from "react";
import HeaderView from "../HeaderView/HeaderView";

type ViewProps = React.ComponentProps<typeof HeaderView>;

export type HeaderProps = {
  right?: React.ReactNode;
  View?: React.ComponentType<ViewProps>;
};

const Header = ({ View = HeaderView, right }: HeaderProps): JSX.Element => {
  return <View right={right} />;
};

export default Header;
