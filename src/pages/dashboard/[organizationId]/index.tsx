import React from "react";
import { OrganizationSwitch } from "../../../organisms";
import {
  OrganizationContextProvider,
  useNumberParam,
  useUserContext,
} from "../../../utils";

const OrganizationPage = (): React.ReactElement | null => {
  const { user } = useUserContext();
  const organizationId = useNumberParam("organizationId");

  return user && organizationId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
    >
      <OrganizationSwitch />
    </OrganizationContextProvider>
  ) : null;
};

export default OrganizationPage;
