import React from "react";
import OrganizationTeamsView from "../OrganizationTeamsView/OrganizationTeamsView";

type ViewProps = React.ComponentProps<typeof OrganizationTeamsView>;

export type OrganizationTeamsProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationTeams = ({
  View = OrganizationTeamsView,
}: OrganizationTeamsProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(OrganizationTeams);
