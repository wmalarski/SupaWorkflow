import React from "react";
import { TeamSwitch } from "../../../../organisms";
import {
  GetTeamProps,
  getTeamProps,
  OrganizationContextProvider,
  TeamContextProvider,
} from "../../../../utils";

const TeamPage = ({
  team,
  profile,
  organization,
  member,
}: GetTeamProps): JSX.Element => (
  <OrganizationContextProvider
    member={member}
    organization={organization}
    profile={profile}
  >
    <TeamContextProvider team={team}>
      <TeamSwitch />
    </TeamContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = getTeamProps;

export default TeamPage;
