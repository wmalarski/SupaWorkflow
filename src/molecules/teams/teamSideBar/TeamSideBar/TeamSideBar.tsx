import React from "react";
import { useOrganizationContext, useTeamContext } from "../../../../utils";
import TeamSideBarView from "../TeamSideBarView/TeamSideBarView";

type ViewProps = React.ComponentProps<typeof TeamSideBarView>;

export type TeamSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const TeamSideBar = ({
  View = TeamSideBarView,
}: TeamSideBarProps): JSX.Element => {
  const { organization } = useOrganizationContext();
  const team = useTeamContext();

  return <View organizationId={organization.id} teamId={team.id} />;
};

export default React.memo(TeamSideBar);
