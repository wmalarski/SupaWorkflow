import { GetServerSideProps } from "next";
import React from "react";
import { CreateWorkflow } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { selectOrganizationMember } from "../../../../services/data/organizationMember/selectOrganization";
import { supabase } from "../../../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
  Template,
} from "../../../../services/types";
import { defaultTemplate } from "../../../../services/utils/defaults";
import Page from "../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../utils/profile/ProfileContext";
import { validateParam } from "../../../../utils/routing/params";
import { TemplateContextProvider } from "../../../../utils/template/TemplateContext";

export type OrganizationTemplatePageProps = {
  template: Template;
  organization: Organization;
  profile: Profile;
  member: OrganizationMember;
};

const OrganizationTemplatePage = ({
  template,
  organization,
  profile,
  member,
}: OrganizationTemplatePageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
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

    if (!organizationId) return { notFound: true };

    const organizationMember = await selectOrganizationMember({
      organizationId: Number(organizationId),
      userId: user.id,
    });

    if (!organizationMember) return { notFound: true };

    return templateId
      ? {
          props: {
            template: {
              ...defaultTemplate,
              id: Number(templateId),
            },
            ...organizationMember,
          },
        }
      : { notFound: true };
  };

export default OrganizationTemplatePage;
