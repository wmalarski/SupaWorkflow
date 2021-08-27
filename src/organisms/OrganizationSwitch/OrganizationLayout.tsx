import React from "react";
import {
  DashboardCorner,
  OrganizationHeader,
  OrganizationSideBar,
  ProfileHeader,
} from "../../molecules";
import { FormPage, GridPage, Header } from "../../templates";

export type OrganizationLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const OrganizationLayout = ({
  isForm,
  children,
}: OrganizationLayoutProps): JSX.Element =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      header={
        <Header left={<OrganizationHeader />} right={<ProfileHeader />} />
      }
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      header={
        <Header left={<OrganizationHeader />} right={<ProfileHeader />} />
      }
      sideBar={<OrganizationSideBar />}
    >
      {children}
    </GridPage>
  );

export default OrganizationLayout;
