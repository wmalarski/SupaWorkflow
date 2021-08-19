import type { NextPage } from "next";
import React from "react";
import { OrganizationsList } from "../molecules";
import { AnonNavigation, UserNavigation } from "../organisms";
import Page from "../templates/Page/Page";
import { useUserContext } from "../utils/auth/UserContext";

const Index: NextPage = () => {
  const { user } = useUserContext();

  return (
    <Page header={user ? <UserNavigation /> : <AnonNavigation />}>
      <OrganizationsList />
    </Page>
  );
};

export default Index;
