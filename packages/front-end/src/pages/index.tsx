import { useUserContext } from "@supa-workflow/services";
import {
  AnonHeader,
  LandingHeader,
  LandingTop,
  ProfileHeader,
} from "molecules";
import type { NextPage } from "next";
import React from "react";
import { Header, Page } from "templates";

const IndexPage: NextPage = () => (
  <Page
    header={
      useUserContext()?.user ? (
        <Header left={<LandingHeader />} right={<ProfileHeader />} />
      ) : (
        <AnonHeader />
      )
    }
  >
    <LandingTop />
  </Page>
);

export default IndexPage;
