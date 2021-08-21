import dynamic from "next/dynamic";
import React from "react";
import { UserNavigation } from "../../../../../organisms";
import Page from "../../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../../utils/profile/ProfileContext";
import {
  templateProtectedRoute,
  TemplateProtectedRouteProps,
} from "../../../../../utils/routing/protectedRoute";
import { TemplateContextProvider } from "../../../../../utils/template/TemplateContext";

const TemplateWorkspace = dynamic(
  () => import("../../../../../organisms/TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

const TemplateIdPage = ({
  template,
  organization,
  profile,
  member,
}: TemplateProtectedRouteProps): JSX.Element => (
  <ProfileContextProvider profile={profile}>
    <OrganizationContextProvider organization={organization} member={member}>
      <TemplateContextProvider template={template}>
        <Page header={<UserNavigation />}>
          <TemplateWorkspace templateId={template.id} />
        </Page>
      </TemplateContextProvider>
    </OrganizationContextProvider>
  </ProfileContextProvider>
);

export const getServerSideProps = templateProtectedRoute;

export default TemplateIdPage;
