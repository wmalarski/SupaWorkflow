import React from "react";
import { CreateWorkflow } from "../../../../../molecules";
import { UserNavigation } from "../../../../../organisms";
import Page from "../../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../../utils/profile/ProfileContext";
import {
  templateProtectedRoute,
  TemplateProtectedRouteProps,
} from "../../../../../utils/routing/protectedRoute";
import { TemplateContextProvider } from "../../../../../utils/template/TemplateContext";

const OrganizationTemplatePage = ({
  template,
  organization,
  profile,
  member,
}: TemplateProtectedRouteProps): JSX.Element => (
  <ProfileContextProvider profile={profile}>
    <OrganizationContextProvider organization={organization} member={member}>
      <TemplateContextProvider template={template}>
        <Page header={<UserNavigation />}>
          <CreateWorkflow />
        </Page>
      </TemplateContextProvider>
    </OrganizationContextProvider>
  </ProfileContextProvider>
);

export const getServerSideProps = templateProtectedRoute;

export default OrganizationTemplatePage;
