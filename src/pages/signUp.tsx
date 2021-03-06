import { AnonHeader, SignUp } from "molecules";
import type { NextPage } from "next";
import React from "react";
import { Page } from "templates";

const SignUpPage: NextPage = () => (
  <Page header={<AnonHeader />}>
    <SignUp />
  </Page>
);

export default SignUpPage;
