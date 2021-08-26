import { GetServerSideProps } from "next";
import React from "react";
import { OrganizationLayout } from "../../../organisms";
import OrganizationSwitch from "../../../organisms/OrganizationSwitch/OrganizationSwitch";
import {
  Organization,
  OrganizationMember,
  Profile,
  selectOrganizationMember,
  selectOrganizationMemberKey,
  supabase,
} from "../../../services";
import {
  OrganizationContextProvider,
  OrganizationTab,
  useTabParam,
  validateParam,
} from "../../../utils";

export type OrganizationPageProps = {
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
};

const OrganizationPage = ({
  member,
  organization,
  profile,
}: OrganizationPageProps): JSX.Element => {
  const tab = useTabParam(OrganizationTab);

  return (
    <OrganizationContextProvider
      member={member}
      organization={organization}
      profile={profile}
    >
      <OrganizationLayout>
        <OrganizationSwitch tab={tab} />
      </OrganizationLayout>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<OrganizationPageProps> =
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const orgId = validateParam(params?.organizationId, /\d+/);

      if (!orgId) return { notFound: true };

      const result = await selectOrganizationMember({
        queryKey: selectOrganizationMemberKey({
          organizationId: Number(orgId),
          userId: user.id,
        }),
      });

      const { member, organization, profile } = result ?? {};

      return member && organization && profile
        ? { props: { member, organization, profile } }
        : { notFound: true };
    } catch (exception) {
      return { notFound: true };
    }
  };

export default OrganizationPage;
