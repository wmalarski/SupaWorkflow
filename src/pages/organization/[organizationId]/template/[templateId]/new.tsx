import React from "react";
import { CreateWorkflow } from "../../../../../molecules";
import { UserNavigation } from "../../../../../organisms";
import Page from "../../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../../utils/contexts/OrganizationContext";
import { TemplateContextProvider } from "../../../../../utils/contexts/TemplateContext";
import {
  templateProtectedRoute,
  TemplateProtectedRouteProps,
} from "../../../../../utils/routing/protectedRoute";

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

export const getServerSideProps = templateProtectedRoute;

export default OrganizationTemplatePage;
