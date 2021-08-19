import React from "react";
import { CreateWorkflow } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import Page from "../../../../templates/Page/Page";

const OrganizationTemplatePage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <CreateWorkflow />
    </Page>
  );
};

export default OrganizationTemplatePage;
