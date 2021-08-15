import type { NextPage } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { Debug } from "../atoms";
import { AnonNavigation, UserNavigation } from "../organisms";
import Page from "../templates/Page/Page";
import { useUserContext } from "../utils/auth/UserContext";

const TemplateWorkspace = dynamic(
  () => import("../organisms/TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

const Index: NextPage = () => {
  const { user } = useUserContext();

  return (
    <Page header={user ? <UserNavigation /> : <AnonNavigation />}>
      <Debug value={user} />
      <TemplateWorkspace />
    </Page>
  );
};

export default Index;
