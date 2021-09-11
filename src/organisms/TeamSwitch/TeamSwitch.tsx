import React from "react";
import { NewTeamMember, OrganizationTeam } from "../../molecules";
import TeamLayout from "./TeamLayout";

const TeamSwitch = (): React.ReactElement | null => (
  <TeamLayout>
    <NewTeamMember />
    <OrganizationTeam />
  </TeamLayout>
);

export default TeamSwitch;
