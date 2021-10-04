import {
  DashboardCorner,
  ProfileHeader,
  WorkflowHeader,
  WorkflowSideBar,
} from "molecules";
import React from "react";
import { GridPage } from "templates";

export type WorkflowLayoutProps = {
  children: React.ReactNode;
};

const WorkflowLayout = ({
  children,
}: WorkflowLayoutProps): React.ReactElement => (
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
