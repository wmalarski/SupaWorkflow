import React from "react";
import { TemplatesList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import Page from "../../templates/Page/Page";

const TemplatesPage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <TemplatesList />
    </Page>
  );
};

export default TemplatesPage;
