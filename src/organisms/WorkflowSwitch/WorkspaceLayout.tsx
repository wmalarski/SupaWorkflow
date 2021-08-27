import React from "react";
import {
  DashboardCorner,
  ProfileHeader,
  WorkflowHeader,
  WorkflowSideBar,
} from "../../molecules";
import { FormPage, GridPage, Header } from "../../templates";

export type WorkspaceLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const WorkspaceLayout = ({
  isForm,
  children,
}: WorkspaceLayoutProps): JSX.Element => {
  return isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      header={<Header left={<WorkflowHeader />} right={<ProfileHeader />} />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      header={<Header left={<WorkflowHeader />} right={<ProfileHeader />} />}
      sideBar={<WorkflowSideBar />}
    >
      {children}
    </GridPage>
  );
};

export default WorkspaceLayout;
