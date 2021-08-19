import type { GetServerSideProps } from "next";
import dynamic from "next/dynamic";
import React from "react";
import { UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import {
  Organization,
  Profile,
  TeamMemberPair,
  Template,
} from "../../../services/types";
import {
  defaultOrganization,
  defaultProfile,
  defaultTemplate,
} from "../../../services/utils/defaults";
import Page from "../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../utils/profile/ProfileContext";
import { validateParam } from "../../../utils/routing/params";

const TemplateWorkspace = dynamic(
  () => import("../../../organisms/TemplateWorkspace/TemplateWorkspace"),
  { ssr: false }
);

export type TemplateIdPageProps = {
  template: Template;
  organization: Organization;
  profile: Profile;
  teams: TeamMemberPair[];
};

const TemplateIdPage = ({
  template,
  organization,
  profile,
  teams,
}: TemplateIdPageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} teams={teams}>
        <Page header={<UserNavigation />}>
          <TemplateWorkspace templateId={template.id} />
        </Page>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<TemplateIdPageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, template
    const templateId = validateParam(params?.templateId, /\d+/);

    return templateId
      ? {
          props: {
            template: {
              ...defaultTemplate,
              id: Number(templateId),
            },
            organization: defaultOrganization,
            profile: defaultProfile,
            teams: [],
          },
        }
      : { notFound: true };
  };

export default TemplateIdPage;
