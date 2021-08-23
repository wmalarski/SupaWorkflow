import { HStack } from "@chakra-ui/react";
import React from "react";

export type HeaderProps = {
  left?: React.ReactNode;
  right?: React.ReactNode;
};

const Header = ({ left, right }: HeaderProps): JSX.Element => {
  return (
    <HStack justifyContent="space-between">
      <div>{left}</div>
      <div>{right}</div>
    </HStack>
  );
};

export default Header;
