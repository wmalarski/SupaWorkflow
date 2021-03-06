import { useRouter } from "next/router";
import { LoadingPane, TemplateSwitch } from "organisms";
import React, { useEffect } from "react";
import {
  OrganizationContextProvider,
  TemplateContextProvider,
  useUserContext,
} from "services";
import { paths, useNumberParam } from "utils";

const TemplatePage = (): React.ReactElement => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const templateId = useNumberParam("templateId");

  useEffect(() => {
    if (
      !router.isReady ||
      !isInitialized ||
      (organizationId && templateId && user)
    )
      return;
    router.push(paths.notFound);
  }, [isInitialized, organizationId, router, templateId, user]);

  return user && organizationId && templateId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
      fallback={<LoadingPane />}
      onError={() => router.push(paths.notFound)}
    >
      <TemplateContextProvider
        templateId={templateId}
        fallback={<LoadingPane />}
        onError={() => router.push(paths.notFound)}
      >
        <TemplateSwitch />
      </TemplateContextProvider>
    </OrganizationContextProvider>
  ) : (
    <LoadingPane />
  );
};

export default TemplatePage;
