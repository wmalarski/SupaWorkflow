import type { NextPage } from "next";
import React from "react";
import { LandingTop } from "../molecules";
import { AnonNavigation, LandingNavigation } from "../organisms";
import Page from "../templates/Page/Page";
import { useUserContext } from "../utils/auth/UserContext";

const Index: NextPage = () => {
  const { user } = useUserContext();

  return (
    <Page header={user ? <LandingNavigation /> : <AnonNavigation />}>
      <LandingTop />
    </Page>
  );
};

export default Index;
