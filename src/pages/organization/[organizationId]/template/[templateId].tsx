import { GetServerSideProps } from "next";
import React from "react";
import { CreateWorkflow } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { supabase } from "../../../../services/supabase";
import {
  Organization,
  Profile,
  TeamMemberPair,
  Template,
} from "../../../../services/types";
import {
  defaultOrganization,
  defaultProfile,
  defaultTemplate,
} from "../../../../services/utils/defaults";
import Page from "../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../utils/profile/ProfileContext";
import { validateParam } from "../../../../utils/routing/params";
import { TemplateContextProvider } from "../../../../utils/template/TemplateContext";

export type OrganizationTemplatePageProps = {
  template: Template;
  organization: Organization;
  profile: Profile;
  teams: TeamMemberPair[];
};

const OrganizationTemplatePage = ({
  template,
  organization,
  profile,
  teams,
}: OrganizationTemplatePageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} teams={teams}>
        <TemplateContextProvider template={template}>
          <Page header={<UserNavigation />}>
            <CreateWorkflow />
          </Page>
        </TemplateContextProvider>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationTemplatePageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, template
    const organizationId = validateParam(params?.organizationId, /\d+/);
    const templateId = validateParam(params?.templateId, /\d+/);

    return organizationId && templateId
      ? {
          props: {
            template: {
              ...defaultTemplate,
              id: Number(templateId),
            },
            organization: {
              ...defaultOrganization,
              id: Number(organizationId),
            },
            profile: defaultProfile,
            teams: [],
          },
        }
      : { notFound: true };
  };

export default OrganizationTemplatePage;
