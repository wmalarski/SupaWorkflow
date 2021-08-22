import React from "react";
import { CreateWorkflow } from "../../../../../molecules";
import { UserNavigation } from "../../../../../organisms";
import { Page } from "../../../../../templates";
import {
  OrganizationContextProvider,
  TemplateContextProvider,
  templateProtectedRoute,
  TemplateProtectedRouteProps,
} from "../../../../../utils";

const OrganizationTemplatePage = ({
  template,
  organization,
  profile,
  member,
}: TemplateProtectedRouteProps): JSX.Element => (
  <OrganizationContextProvider
    organization={organization}
    member={member}
    profile={profile}
  >
    <TemplateContextProvider template={template}>
      <Page header={<UserNavigation />}>
        <CreateWorkflow />
      </Page>
    </TemplateContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = templateProtectedRoute();

export default OrganizationTemplatePage;
