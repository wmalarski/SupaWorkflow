import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React from "react";
import { OrganizationLayout } from "../../../../../organisms";
import { RouteOrganizationContextProvider } from "../../../../../utils";
import { validateNumberParam } from "../../../../../utils/routing/params";

const TemplateWorkspace = dynamic(
  () => import("../../../../../organisms/TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

const TemplateIdPage = (): JSX.Element => {
  const router = useRouter();

  const templateId = validateNumberParam(router.query.templateId);

  return (
    <RouteOrganizationContextProvider>
      <OrganizationLayout>
        {templateId && <TemplateWorkspace templateId={templateId} />}
      </OrganizationLayout>
    </RouteOrganizationContextProvider>
  );
};

export default TemplateIdPage;
