import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { LoadingPane, TeamSwitch } from "../../../../organisms";
import {
  OrganizationContextProvider,
  paths,
  TeamContextProvider,
  useNumberParam,
  useUserContext,
} from "../../../../utils";

const TeamPage = (): React.ReactElement => {
  const router = useRouter();
  const { user } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const teamId = useNumberParam("teamId");

  useEffect(() => {
    if (!router.isReady || (organizationId && teamId && user)) return;
    router.push(paths.notFound);
  }, [organizationId, router, teamId, user]);

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
