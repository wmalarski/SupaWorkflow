import { NewTeamMember, OrganizationTeam } from "molecules";
import React from "react";
import TeamLayout from "./TeamLayout";

const TeamSwitch = (): React.ReactElement => (
  <TeamLayout>
    <NewTeamMember />
    <OrganizationTeam />
  </TeamLayout>
);

export default TeamSwitch;
