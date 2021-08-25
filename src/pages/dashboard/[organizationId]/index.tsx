import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const paramTab = validateParam(router.query?.tab);
  const tab =
    paramTab && paramTab in OrganizationTab
      ? OrganizationTab[paramTab as keyof typeof OrganizationTab]
      : null;

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
