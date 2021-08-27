import React from "react";
import {
  DashboardCorner,
  OrganizationSideBar,
  ProfileHeader,
  TeamHeader,
} from "../../molecules";
import { FormPage, GridPage, Header } from "../../templates";

export type TeamLayoutProps = {
  isForm?: boolean;
  children: React.ReactNode;
};

const TeamLayout = ({ isForm, children }: TeamLayoutProps): JSX.Element =>
  isForm ? (
    <FormPage
      corner={<DashboardCorner />}
      header={<Header left={<TeamHeader />} right={<ProfileHeader />} />}
    >
      {children}
    </FormPage>
  ) : (
    <GridPage
      corner={<DashboardCorner />}
      header={<Header left={<TeamHeader />} right={<ProfileHeader />} />}
      sideBar={<OrganizationSideBar />}
    >
      {children}
    </GridPage>
  );

export default TeamLayout;
