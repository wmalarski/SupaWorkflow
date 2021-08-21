import { GetServerSideProps } from "next";
import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { supabase } from "../../../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
} from "../../../../services/types";
import {
  defaultOrganization,
  defaultOrganizationMember,
  defaultProfile,
} from "../../../../services/utils/defaults";
import Page from "../../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../../utils/profile/ProfileContext";
import { validateParam } from "../../../../utils/routing/params";

export type OrganizationNewTemplateProps = {
  organization: Organization;
  profile: Profile;
  member: OrganizationMember;
};

const OrganizationNewTemplate = ({
  organization,
  profile,
  member,
}: OrganizationNewTemplateProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
        <Page header={<UserNavigation />}>
          <CreateTemplate />
        </Page>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationNewTemplateProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization
    const organizationId = validateParam(params?.organizationId, /\d+/);

    return organizationId
      ? {
          props: {
            organization: {
              ...defaultOrganization,
              id: Number(organizationId),
            },
            profile: defaultProfile,
            member: defaultOrganizationMember,
          },
        }
      : { notFound: true };
  };

export default OrganizationNewTemplate;
