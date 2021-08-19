import React from "react";
import { WorkflowEditor } from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import Page from "../../../templates/Page/Page";

const WorkflowPage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <WorkflowEditor />
    </Page>
  );
};

export default WorkflowPage;
