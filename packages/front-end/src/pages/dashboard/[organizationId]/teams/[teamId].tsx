import {
  OrganizationContextProvider,
  TeamContextProvider,
  useUserContext,
} from "@supa-workflow/services";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingPane, TeamSwitch } from "../../../../organisms";
import { paths, useNumberParam } from "../../../../utils";

const TeamPage = (): React.ReactElement => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const teamId = useNumberParam("teamId");

  useEffect(() => {
    if (!router.isReady || !isInitialized || (organizationId && teamId && user))
      return;
    router.push(paths.notFound);
  }, [isInitialized, organizationId, router, teamId, user]);

  return user && organizationId && teamId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
      fallback={<LoadingPane />}
      onError={() => router.push(paths.notFound)}
    >
      <TeamContextProvider
        teamId={teamId}
        fallback={<LoadingPane />}
        onError={() => router.push(paths.notFound)}
      >
        <TeamSwitch />
      </TeamContextProvider>
    </OrganizationContextProvider>
  ) : (
    <LoadingPane />
  );
};

export default TeamPage;
