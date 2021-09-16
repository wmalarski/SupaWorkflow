import type { NextPage } from "next";
import React from "react";
import {
  AnonHeader,
  LandingHeader,
  LandingTop,
  ProfileHeader,
} from "../molecules";
import { Header, Page } from "../templates";
import { useUserContext } from "../utils";

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
