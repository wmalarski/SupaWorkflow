import {
  DashboardCorner,
  ProfileHeader,
  TemplateHeader,
  TemplateSideBar,
} from "molecules";
import React from "react";
import { GridPage } from "templates";

export type TemplateLayoutProps = {
  dialogs?: React.ReactNode;
  children: React.ReactNode;
};

const TemplateLayout = ({
  dialogs,
  children,
}: TemplateLayoutProps): React.ReactElement => (
  <GridPage
    corner={<DashboardCorner />}
    headerLeft={<TemplateHeader />}
    headerRight={<ProfileHeader />}
    sideBar={<TemplateSideBar />}
  >
    {dialogs}
    {children}
  </GridPage>
);

export default TemplateLayout;
