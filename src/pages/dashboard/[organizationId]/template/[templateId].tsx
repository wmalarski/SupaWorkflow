import React from "react";
import { TemplateSwitch } from "../../../../organisms";
import {
  OrganizationContextProvider,
  TemplateContextProvider,
  useNumberParam,
  useUserContext,
} from "../../../../utils";

const TemplatePage = (): React.ReactElement | null => {
  const { user } = useUserContext();
  const organizationId = useNumberParam("organizationId");
  const templateId = useNumberParam("templateId");

  return user && organizationId && templateId ? (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user.id}
    >
      <TemplateContextProvider templateId={templateId}>
        <TemplateSwitch />
      </TemplateContextProvider>
    </OrganizationContextProvider>
  ) : null;
};

export default TemplatePage;
