import React from "react";
import {
  DashboardCorner,
  ProfileHeader,
  TemplateHeader,
  TemplateSideBar,
} from "../../molecules";
import { FormPage, GridPage, Header } from "../../templates";

export type TemplateLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const TemplateLayout = ({
  isForm,
  children,
}: TemplateLayoutProps): JSX.Element =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      header={<Header left={<TemplateHeader />} right={<ProfileHeader />} />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      header={<Header left={<TemplateHeader />} right={<ProfileHeader />} />}
      sideBar={<TemplateSideBar />}
    >
      {children}
    </GridPage>
  );

export default TemplateLayout;
