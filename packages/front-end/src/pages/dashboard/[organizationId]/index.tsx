import {
  OrganizationContextProvider,
  useUserContext,
} from "@supa-workflow/services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingPane, OrganizationSwitch } from "../../../organisms";
import { paths, useNumberParam } from "../../../utils";

const OrganizationPage = (): React.ReactElement => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();
  const organizationId = useNumberParam("organizationId");

  useEffect(() => {
    if (!router.isReady || !isInitialized || (organizationId && user)) return;
    router.push(paths.notFound);
  }, [isInitialized, organizationId, router, user]);

  return user && organizationId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
      fallback={<LoadingPane />}
      onError={() => router.push(paths.notFound)}
    >
      <OrganizationSwitch />
    </OrganizationContextProvider>
  ) : (
    <LoadingPane />
  );
};

export default OrganizationPage;
