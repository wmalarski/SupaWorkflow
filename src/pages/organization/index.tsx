import type { NextPage } from "next";
import React from "react";
import { OrganizationsList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import Page from "../../templates/Page/Page";

const OrganizationsPage: NextPage = () => {
  return (
    <Page header={<UserNavigation />}>
      <OrganizationsList />
    </Page>
  );
};

export default OrganizationsPage;
