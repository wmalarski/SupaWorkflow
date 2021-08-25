import { GetServerSideProps } from "next";
import React from "react";
import { OrganizationLayout } from "../../../../organisms";
import TemplateSwitch from "../../../../organisms/TemplateSwitch/TemplateSwitch";
import {
  Organization,
  OrganizationMember,
  Profile,
  selectOrganizationMember,
  selectOrganizationMemberKey,
  selectTemplate,
  selectTemplateKey,
  supabase,
  Template,
} from "../../../../services";
import {
  OrganizationContextProvider,
  TemplateContextProvider,
  TemplateTab,
  validateNumberParam,
  validateParam,
} from "../../../../utils";

export type TemplatePageProps = {
  tab: TemplateTab | null;
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
  template: Template;
};

const TemplatePage = ({
  tab,
  template,
  member,
  organization,
  profile,
}: TemplatePageProps): JSX.Element => (
  <OrganizationContextProvider
    member={member}
    organization={organization}
    profile={profile}
  >
    <TemplateContextProvider template={template}>
      <OrganizationLayout>
        <TemplateSwitch tab={tab} />
      </OrganizationLayout>
    </TemplateContextProvider>
  </OrganizationContextProvider>
);

export const getServerSideProps: GetServerSideProps<TemplatePageProps> =
  async ({ query, params, req }) => {
    try {
      const tabParam = validateParam(query?.tab);
      const tab =
        tabParam && tabParam in TemplateTab
          ? TemplateTab[tabParam as keyof typeof TemplateTab]
          : null;

      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const templateId = validateNumberParam(params?.templateId);
      const orgId = validateNumberParam(params?.organizationId);

      if (!orgId || !templateId) return { notFound: true };

      const [template, result] = await Promise.all([
        selectTemplate({ queryKey: selectTemplateKey({ id: templateId }) }),
        selectOrganizationMember({
          queryKey: selectOrganizationMemberKey({
            organizationId: orgId,
            userId: user.id,
          }),
        }),
      ]);

      const { member, organization, profile } = result ?? {};

      return member && organization && profile && template
        ? { props: { template, member, organization, profile, tab } }
        : { notFound: true };
    } catch (exception) {
      return { notFound: true };
    }
  };

export default TemplatePage;
