import React from "react";
import { WorkflowsList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import Page from "../../templates/Page/Page";

const WorkflowsPage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <WorkflowsList />
    </Page>
  );
};

export default WorkflowsPage;
