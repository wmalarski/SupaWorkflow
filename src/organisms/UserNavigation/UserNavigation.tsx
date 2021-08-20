import React from "react";
import { ProfileHeader, SignOut } from "../../molecules";
import { Header } from "../../templates";

const UserNavigation = (): JSX.Element => {
  return (
    <Header
      right={
        <>
          <ProfileHeader />
          <SignOut />
        </>
      }
    />
  );
};

export default UserNavigation;
