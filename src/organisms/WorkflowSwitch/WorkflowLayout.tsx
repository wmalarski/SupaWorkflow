import React from "react";
import {
  DashboardCorner,
  ProfileHeader,
  WorkflowHeader,
  WorkflowSideBar,
} from "../../molecules";
import { FormPage, GridPage } from "../../templates";

export type WorkflowLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const WorkflowLayout = ({
  isForm,
  children,
}: WorkflowLayoutProps): JSX.Element =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      headerLeft={<WorkflowHeader />}
      headerRight={<ProfileHeader />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      headerLeft={<WorkflowHeader />}
      headerRight={<ProfileHeader />}
      sideBar={<WorkflowSideBar />}
    >
      {children}
    </GridPage>
  );

export default WorkflowLayout;
