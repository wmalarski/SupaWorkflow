import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React from "react";
import { OrganizationLayout, TeamSwitch } from "../../../../organisms";
import {
  Organization,
  OrganizationMember,
  Profile,
  selectOrganizationMember,
  selectOrganizationMemberKey,
  supabase,
  Team,
} from "../../../../services";
import {
  selectTeam,
  selectTeamKey,
} from "../../../../services/data/team/selectTeam";
import {
  OrganizationContextProvider,
  TeamContextProvider,
  validateNumberParam,
  validateParam,
} from "../../../../utils";
import { TeamTab } from "../../../../utils/routing/types";

export type TeamPageProps = {
  team: Team;
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
};

const TeamPage = ({
  team,
  profile,
  organization,
  member,
}: TeamPageProps): JSX.Element => {
  const router = useRouter();

  const paramTab = validateParam(router.query?.tab);
  const tab =
    paramTab && paramTab in TeamTab
      ? TeamTab[paramTab as keyof typeof TeamTab]
      : null;

  return (
    <OrganizationContextProvider
      member={member}
      organization={organization}
      profile={profile}
    >
      <TeamContextProvider team={team}>
        <OrganizationLayout>
          <TeamSwitch tab={tab} />
        </OrganizationLayout>
      </TeamContextProvider>
    </OrganizationContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<TeamPageProps> = async ({
  params,
  req,
}) => {
  try {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const teamId = validateNumberParam(params?.teamId);
    const orgId = validateNumberParam(params?.organizationId);

    if (!orgId || !teamId) return { notFound: true };

    const [team, result] = await Promise.all([
      selectTeam({ queryKey: selectTeamKey({ id: teamId }) }),
      selectOrganizationMember({
        queryKey: selectOrganizationMemberKey({
          organizationId: orgId,
          userId: user.id,
        }),
      }),
    ]);

    const { member, organization, profile } = result ?? {};

    return team && member && organization && profile
      ? { props: { member, organization, profile, team } }
      : { notFound: true };
  } catch (exception) {
    return { notFound: true };
  }
};

export default TeamPage;
