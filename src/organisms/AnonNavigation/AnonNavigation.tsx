import React from "react";
import { AnonHeader, Header } from "../../molecules";

const AnonNavigation = (): JSX.Element => {
  return <Header right={<AnonHeader />} />;
};

export default AnonNavigation;
