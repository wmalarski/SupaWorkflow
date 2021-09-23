import { useOrganizationContext } from "@supa-workflow/services";
import React from "react";
import { OrganizationTab, useTabParam } from "../../../../utils";
import OrganizationHeaderView from "../OrganizationHeaderView/OrganizationHeaderView";

type ViewProps = React.ComponentProps<typeof OrganizationHeaderView>;

export type OrganizationHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const OrganizationHeader = ({
  View = OrganizationHeaderView,
}: OrganizationHeaderProps): React.ReactElement => {
  const tab = useTabParam(OrganizationTab);

  const organization = useOrganizationContext();

  return <View tab={tab} organizationId={organization.id} />;
};

export default React.memo(OrganizationHeader);
