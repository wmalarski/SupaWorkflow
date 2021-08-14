import type { NextPage } from "next";
import React from "react";
import { Debug } from "../atoms";
import { AnonNavigation, UserNavigation } from "../organisms";
import Page from "../templates/Page/Page";
import { useUserContext } from "../utils/auth/UserContext";

const Index: NextPage = () => {
  const { user } = useUserContext();

  return (
    <Page header={user ? <UserNavigation /> : <AnonNavigation />}>
      <Debug value={user} />
    </Page>
  );
};

export default Index;
