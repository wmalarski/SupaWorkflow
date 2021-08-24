import dynamic from "next/dynamic";
import React from "react";
import { OrganizationLayout } from "../../../../../organisms";
import {
  OrganizationContextProvider,
  TemplateContextProvider,
  templateProtectedRoute,
  TemplateProtectedRouteProps,
} from "../../../../../utils";

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
      <OrganizationLayout>
        <TemplateWorkspace />
      </OrganizationLayout>
    </TemplateContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = templateProtectedRoute();

export default TemplateIdPage;
