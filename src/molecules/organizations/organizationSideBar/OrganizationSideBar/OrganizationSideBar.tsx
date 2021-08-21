import React from "react";
import { useSelectTemplates } from "../../../../services";
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

  const { data: templates } = useSelectTemplates({
    organization_id: organization.id,
  });

  return <View templates={templates} />;
};

export default React.memo(OrganizationSideBar);
