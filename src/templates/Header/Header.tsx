import React from "react";

export type HeaderProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const Header = ({ left, right }: HeaderProps): JSX.Element => {
  return (
    <div>
      {left}
      {right}
    </div>
  );
};

export default Header;
