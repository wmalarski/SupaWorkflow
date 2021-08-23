import React from "react";
import { LandingHeader, ProfileHeader } from "../../molecules";
import { Header } from "../../templates";

const LandingNavigation = (): JSX.Element => {
  return <Header left={<LandingHeader />} right={<ProfileHeader />} />;
};

export default LandingNavigation;
