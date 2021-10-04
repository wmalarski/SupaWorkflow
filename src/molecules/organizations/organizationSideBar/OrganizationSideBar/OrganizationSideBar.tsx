import React from "react";
import { useOrganizationContext, useOrganizationMemberContext } from "services";
import { OrganizationTab, useTabParam } from "utils";
import OrganizationSideBarView from "../OrganizationSideBarView/OrganizationSideBarView";

export type OrganizationSideBarProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof OrganizationSideBarView>
  >;
};

const OrganizationSideBar = ({
  View = OrganizationSideBarView,
}: OrganizationSideBarProps): React.ReactElement => {
  const organization = useOrganizationContext();
  const member = useOrganizationMemberContext();

  const tab = useTabParam(OrganizationTab);

  return (
    <View
      organizationId={organization.id}
      organizationRole={member.role}
      tab={tab}
    />
  );
};

export default React.memo(OrganizationSideBar);
