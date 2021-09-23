import type { NextPage } from "next";
import React from "react";
import { AnonHeader, SignIn } from "../molecules";
import { Page } from "../templates";

const SignInPage: NextPage = () => (
  <Page header={<AnonHeader />}>
    <SignIn />
  </Page>
);

export default SignInPage;
