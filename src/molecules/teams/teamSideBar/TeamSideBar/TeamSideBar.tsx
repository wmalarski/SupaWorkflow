import React from "react";
import { useOrganizationContext, useTeamContext } from "services";
import TeamSideBarView from "../TeamSideBarView/TeamSideBarView";

export type TeamSideBarProps = {
  View?: React.ComponentType<React.ComponentProps<typeof TeamSideBarView>>;
};

const TeamSideBar = ({
  View = TeamSideBarView,
}: TeamSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const team = useTeamContext();

  return <View organizationId={organization.id} teamId={team.id} />;
};

export default React.memo(TeamSideBar);
