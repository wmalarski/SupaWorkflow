import React from "react";
import NewOrganizationTeamView from "../NewOrganizationTeamView/NewOrganizationTeamView";

type ViewProps = React.ComponentProps<typeof NewOrganizationTeamView>;

export type NewOrganizationTeamProps = {
  View?: React.ComponentType<ViewProps>;
};

const NewOrganizationTeam = ({
  View = NewOrganizationTeamView,
}: NewOrganizationTeamProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(NewOrganizationTeam);
