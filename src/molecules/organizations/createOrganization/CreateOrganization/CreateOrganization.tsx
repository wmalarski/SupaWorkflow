import React from "react";
import CreateOrganizationView from "../CreateOrganizationView/CreateOrganizationView";

type ViewProps = React.ComponentProps<typeof CreateOrganizationView>;

export type CreateOrganizationProps = {
  View?: React.ComponentType<ViewProps>;
};

const CreateOrganization = ({
  View = CreateOrganizationView,
}: CreateOrganizationProps): JSX.Element => {
  return <View data="hello" />;
};

export default CreateOrganization;
