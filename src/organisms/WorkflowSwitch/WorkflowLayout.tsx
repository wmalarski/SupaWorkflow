import {
  DashboardCorner,
  ProfileHeader,
  WorkflowHeader,
  WorkflowSideBar,
} from "molecules";
import React from "react";
import { FormPage, GridPage } from "templates";

export type WorkflowLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const WorkflowLayout = ({
  isForm,
  children,
}: WorkflowLayoutProps): React.ReactElement =>
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
