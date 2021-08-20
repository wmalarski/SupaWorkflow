import React from "react";
import { AnonHeader } from "../../molecules";
import { Header } from "../../templates";

const AnonNavigation = (): JSX.Element => {
  return <Header left={<AnonHeader />} />;
};

export default AnonNavigation;
