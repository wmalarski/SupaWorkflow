import type { NextPage } from "next";
import React from "react";
import { SignIn } from "../molecules";
import { AnonNavigation } from "../organisms";
import { Page } from "../templates";

const SignInPage: NextPage = () => {
  return (
    <Page header={<AnonNavigation />}>
      <SignIn />
    </Page>
  );
};

export default SignInPage;
