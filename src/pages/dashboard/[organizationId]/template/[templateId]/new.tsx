import React from "react";
import { CreateWorkflow } from "../../../../../molecules";
import { OrganizationLayout } from "../../../../../organisms";
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
      <OrganizationLayout>
        <CreateWorkflow />
      </OrganizationLayout>
    </TemplateContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = templateProtectedRoute();

export default OrganizationTemplatePage;
