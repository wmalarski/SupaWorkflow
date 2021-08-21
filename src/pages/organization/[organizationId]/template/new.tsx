import { GetServerSideProps } from "next";
import React from "react";
import { CreateTemplate } from "../../../../molecules";
import { UserNavigation } from "../../../../organisms";
import { selectOrganizationMember } from "../../../../services/data/organizationMember/selectOrganization";
import { supabase } from "../../../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
} from "../../../../services/types";
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

    const organizationId = validateParam(params?.organizationId, /\d+/);

    if (!organizationId) return { notFound: true };

    const props = await selectOrganizationMember({
      organizationId: Number(organizationId),
      userId: user.id,
    });

    return !props ? { notFound: true } : { props };
  };

export default OrganizationNewTemplate;
