import React from "react";
import { TeamSwitch } from "../../../../organisms";
import {
  OrganizationContextProvider,
  TeamContextProvider,
  useNumberParam,
  useUserContext,
} from "../../../../utils";

const TeamPage = (): React.ReactElement | null => {
  const { user } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const teamId = useNumberParam("teamId");

  return user && organizationId && teamId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
    >
      <TeamContextProvider teamId={teamId}>
        <TeamSwitch />
      </TeamContextProvider>
    </OrganizationContextProvider>
  ) : null;
};

export default TeamPage;
