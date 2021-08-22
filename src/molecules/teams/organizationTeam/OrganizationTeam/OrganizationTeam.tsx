import React from "react";
import OrganizationTeamView from "../OrganizationTeamView/OrganizationTeamView";

type ViewProps = React.ComponentProps<typeof OrganizationTeamView>;

export type OrganizationTeamProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationTeam = ({
  View = OrganizationTeamView,
}: OrganizationTeamProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(OrganizationTeam);
