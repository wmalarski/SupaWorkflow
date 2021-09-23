import React from "react";
import {
  DashboardCorner,
  ProfileHeader,
  TemplateHeader,
  TemplateSideBar,
} from "../../molecules";
import { FormPage, GridPage } from "../../templates";

export type TemplateLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const TemplateLayout = ({
  isForm,
  children,
}: TemplateLayoutProps): React.ReactElement =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      headerLeft={<TemplateHeader />}
      headerRight={<ProfileHeader />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      headerLeft={<TemplateHeader />}
      headerRight={<ProfileHeader />}
      sideBar={<TemplateSideBar />}
    >
      {children}
    </GridPage>
  );

export default TemplateLayout;
