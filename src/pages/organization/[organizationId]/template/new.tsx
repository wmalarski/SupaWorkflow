import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import Page from "../../../../templates/Page/Page";

const OrganizationNewTemplate = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <CreateTemplate />
    </Page>
  );
};

export default OrganizationNewTemplate;
