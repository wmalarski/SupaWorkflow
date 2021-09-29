import React from "react";
import { useOrganizationContext, useOrganizationMemberContext } from "services";
import OrganizationSideBarView from "../OrganizationSideBarView/OrganizationSideBarView";

type ViewProps = React.ComponentProps<typeof OrganizationSideBarView>;

export type OrganizationSideBarProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationSideBar = ({
  View = OrganizationSideBarView,
}: OrganizationSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const member = useOrganizationMemberContext();

  return (
    <View organizationId={organization.id} organizationRole={member.role} />
  );
};

export default React.memo(OrganizationSideBar);
