import React from "react";
import { useOrganizationContext } from "services";
import { OrganizationTab, useTabParam } from "utils";
import OrganizationHeaderView from "../OrganizationHeaderView/OrganizationHeaderView";

export type OrganizationHeaderProps = {
  View?: React.ComponentType<
    React.ComponentProps<typeof OrganizationHeaderView>
  >;
};

const OrganizationHeader = ({
  View = OrganizationHeaderView,
}: OrganizationHeaderProps): React.ReactElement => {
  const tab = useTabParam(OrganizationTab);

  const organization = useOrganizationContext();

  return <View tab={tab} organizationId={organization.id} />;
};

export default React.memo(OrganizationHeader);
