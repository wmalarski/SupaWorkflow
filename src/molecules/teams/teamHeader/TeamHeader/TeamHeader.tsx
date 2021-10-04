import React from "react";
import { useOrganizationContext, useTeamContext } from "services";
import TeamHeaderView from "../TeamHeaderView/TeamHeaderView";

export type TeamHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof TeamHeaderView>>;
};

const TeamHeader = ({
  View = TeamHeaderView,
}: TeamHeaderProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const team = useTeamContext();

  return <View organizationId={organization.id} teamId={team.id} />;
};

export default React.memo(TeamHeader);
