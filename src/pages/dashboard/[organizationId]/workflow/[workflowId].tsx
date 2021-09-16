import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingPane, WorkflowSwitch } from "../../../../organisms";
import {
  OrganizationContextProvider,
  paths,
  useNumberParam,
  useUserContext,
  WorkflowContextProvider,
} from "../../../../utils";

const WorkflowPage = (): React.ReactElement => {
  const router = useRouter();
  const { user } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const workflowId = useNumberParam("workflowId");

  useEffect(() => {
    if (!router.isReady || (organizationId && workflowId && user)) return;
    router.push(paths.notFound);
  }, [organizationId, router, workflowId, user]);

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
