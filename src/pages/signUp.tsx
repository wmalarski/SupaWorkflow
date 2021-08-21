import type { NextPage } from "next";
import React from "react";
import { SignUp } from "../molecules";
import { AnonNavigation } from "../organisms";
import { Page } from "../templates";

const SignUpPage: NextPage = () => {
  return (
    <Page header={<AnonNavigation />}>
      <SignUp />
    </Page>
  );
};

export default SignUpPage;
