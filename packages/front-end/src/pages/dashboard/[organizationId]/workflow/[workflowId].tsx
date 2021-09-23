import {
  OrganizationContextProvider,
  useUserContext,
  WorkflowContextProvider,
} from "@supa-workflow/services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingPane, WorkflowSwitch } from "../../../../organisms";
import { paths, useNumberParam } from "../../../../utils";

const WorkflowPage = (): React.ReactElement => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const workflowId = useNumberParam("workflowId");

  useEffect(() => {
    if (
      !router.isReady ||
      !isInitialized ||
      (organizationId && workflowId && user)
    )
      return;
    router.push(paths.notFound);
  }, [organizationId, router, workflowId, user, isInitialized]);

  return user && workflowId && organizationId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
      fallback={<LoadingPane />}
      onError={() => router.push(paths.notFound)}
    >
      <WorkflowContextProvider
        workflowId={workflowId}
        fallback={<LoadingPane />}
        onError={() => router.push(paths.notFound)}
      >
        <WorkflowSwitch />
      </WorkflowContextProvider>
    </OrganizationContextProvider>
  ) : (
    <LoadingPane />
  );
};

export default WorkflowPage;
