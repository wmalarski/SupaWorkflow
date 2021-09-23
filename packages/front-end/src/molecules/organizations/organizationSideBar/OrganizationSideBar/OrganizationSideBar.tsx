import {
  useOrganizationContext,
  useOrganizationMemberContext,
} from "@supa-workflow/services";
import React from "react";
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
