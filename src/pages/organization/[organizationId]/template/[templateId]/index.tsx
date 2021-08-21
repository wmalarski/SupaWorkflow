import dynamic from "next/dynamic";
import React from "react";
import { UserNavigation } from "../../../../../organisms";
import Page from "../../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../../utils/contexts/OrganizationContext";
import { TemplateContextProvider } from "../../../../../utils/contexts/TemplateContext";
import {
  templateProtectedRoute,
  TemplateProtectedRouteProps,
} from "../../../../../utils/routing/protectedRoute";

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
  <OrganizationContextProvider
    organization={organization}
    member={member}
    profile={profile}
  >
    <TemplateContextProvider template={template}>
      <Page header={<UserNavigation />}>
        <TemplateWorkspace templateId={template.id} />
      </Page>
    </TemplateContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = templateProtectedRoute;

export default TemplateIdPage;
