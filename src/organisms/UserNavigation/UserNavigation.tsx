import React from "react";
import { Header, ProfileHeader, SignOut } from "../../molecules";

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
