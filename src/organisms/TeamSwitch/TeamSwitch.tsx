import React from "react";
import { NewTeamMember, OrganizationTeam } from "../../molecules";

const TeamSwitch = (): JSX.Element | null => {
  return (
    <>
      <NewTeamMember />
      <OrganizationTeam />
    </>
  );
};

export default TeamSwitch;
