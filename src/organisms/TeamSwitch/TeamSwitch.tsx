import React from "react";
import { NewTeamMember, OrganizationTeam } from "../../molecules";
import { TeamTab } from "../../utils";

export type TeamSwitchProps = {
  tab: TeamTab | null;
};

const TeamSwitch = ({ tab }: TeamSwitchProps): JSX.Element | null => {
  switch (tab) {
    case TeamTab.dashboard:
      return (
        <>
          <NewTeamMember />
          <OrganizationTeam />
        </>
      );
    default:
      return null;
  }
};

export default TeamSwitch;
