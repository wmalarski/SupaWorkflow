import React from "react";
import { TemplateSwitch } from "../../../../organisms";
import {
  getTemplateProps,
  GetTemplateProps,
  OrganizationContextProvider,
  TemplateContextProvider,
} from "../../../../utils";

const TemplatePage = ({
  template,
  member,
  organization,
  profile,
}: GetTemplateProps): React.ReactElement => (
  <OrganizationContextProvider
    member={member}
    organization={organization}
    profile={profile}
  >
    <TemplateContextProvider template={template}>
      <TemplateSwitch />
    </TemplateContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps = getTemplateProps;

export default TemplatePage;
