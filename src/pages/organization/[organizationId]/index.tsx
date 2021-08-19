import React from "react";
import { OrganizationDashboard } from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import Page from "../../../templates/Page/Page";

const OrganizationIdPage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <OrganizationDashboard />
    </Page>
  );
};

export default OrganizationIdPage;
