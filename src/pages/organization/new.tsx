import type { NextPage } from "next";
import React from "react";
import { CreateOrganization } from "../../molecules";
import { UserNavigation } from "../../organisms";
import Page from "../../templates/Page/Page";

const NewOrganizationPage: NextPage = () => {
  return (
    <Page header={<UserNavigation />}>
      <CreateOrganization />
    </Page>
  );
};

export default NewOrganizationPage;
