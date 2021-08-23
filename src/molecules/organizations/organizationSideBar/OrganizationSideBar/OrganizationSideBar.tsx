import React from "react";
import { useOrganizationContext } from "../../../../utils";
import OrganizationSideBarView from "../OrganizationSideBarView/OrganizationSideBarView";

type ViewProps = React.ComponentProps<typeof OrganizationSideBarView>;

export type OrganizationSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationSideBar = ({
  View = OrganizationSideBarView,
}: OrganizationSideBarProps): JSX.Element => {
  const { organization } = useOrganizationContext();

  return <View organizationId={organization.id} />;
};

export default React.memo(OrganizationSideBar);
