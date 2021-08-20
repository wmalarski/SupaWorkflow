import React from "react";
import { LandingHeader, ProfileHeader, SignOut } from "../../molecules";
import { Header } from "../../templates";

const LandingNavigation = (): JSX.Element => {
  return (
    <Header
      left={<LandingHeader />}
      right={
        <>
          <ProfileHeader />
          <SignOut />
        </>
      }
    />
  );
};

export default LandingNavigation;
