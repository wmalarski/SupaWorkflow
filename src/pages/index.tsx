import type { NextPage } from "next";
import React from "react";
import { HeaderLanding } from "../molecules";
import { AnonNavigation, UserNavigation } from "../organisms";
import Page from "../templates/Page/Page";
import { useUserContext } from "../utils/auth/UserContext";

const Index: NextPage = () => {
  const { user } = useUserContext();

  return (
    <Page header={user ? <UserNavigation /> : <AnonNavigation />}>
      <HeaderLanding />
    </Page>
  );
};

export default Index;
