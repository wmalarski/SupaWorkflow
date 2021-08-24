import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { OrganizationLayout } from "../../../../../organisms";
import {
  OrganizationContextProvider,
  organizationProtectedRoute,
  OrganizationProtectedRouteProps,
} from "../../../../../utils";
import { validateNumberParam } from "../../../../../utils/routing/params";

const TemplateWorkspace = dynamic(
  () => import("../../../../../organisms/TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

const TemplateIdPage = ({
  organization,
  profile,
  member,
}: OrganizationProtectedRouteProps): JSX.Element => {
  const router = useRouter();

  const templateId = validateNumberParam(router.query.templateId);

  return (
    <OrganizationContextProvider
      organization={organization}
      member={member}
      profile={profile}
    >
      <OrganizationLayout>
        {templateId && <TemplateWorkspace templateId={templateId} />}
      </OrganizationLayout>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps = organizationProtectedRoute();

export default TemplateIdPage;
