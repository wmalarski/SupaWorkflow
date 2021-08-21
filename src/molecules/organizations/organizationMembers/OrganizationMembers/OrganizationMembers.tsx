import React from "react";
import OrganizationMembersView from "../OrganizationMembersView/OrganizationMembersView";

type ViewProps = React.ComponentProps<typeof OrganizationMembersView>;

export type OrganizationMembersProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationMembers = ({
  View = OrganizationMembersView,
}: OrganizationMembersProps): JSX.Element => {
  return <View data="hello" />;
};

export default React.memo(OrganizationMembers);
