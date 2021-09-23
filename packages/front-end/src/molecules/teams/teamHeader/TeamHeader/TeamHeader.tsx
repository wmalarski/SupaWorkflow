import React from "react";
import { useOrganizationContext, useTeamContext } from "../../../../utils";
import TeamHeaderView from "../TeamHeaderView/TeamHeaderView";

type ViewProps = React.ComponentProps<typeof TeamHeaderView>;

export type TeamHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const TeamHeader = ({
  View = TeamHeaderView,
}: TeamHeaderProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const team = useTeamContext();

  return <View organizationId={organization.id} teamId={team.id} />;
};

export default React.memo(TeamHeader);
