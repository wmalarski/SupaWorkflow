import React from "react";
import OrganizationsListView from "../OrganizationsListView/OrganizationsListView";

type ViewProps = React.ComponentProps<typeof OrganizationsListView>;

export type OrganizationsListProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationsList = ({
  View = OrganizationsListView,
}: OrganizationsListProps): JSX.Element => {
  return <View data="hello" />;
};

export default OrganizationsList;
