import { GetServerSideProps } from "next";
import {
  Organization,
  OrganizationMember,
  Profile,
  selectMember,
  selectMemberKey,
  selectProfile,
  selectProfileKey,
  selectTeam,
  selectTeamKey,
  selectTemplate,
  selectTemplateKey,
  selectWorkflow,
  selectWorkflowKey,
  supabase,
  Team,
  Template,
  Workflow,
} from "../../services";
import { validateNumberParam, validateParam } from "./params";

export type GetProfileProps = {
  profile: Profile;
};

export const getProfileProps: GetServerSideProps<GetProfileProps> = async ({
  req,
}) => {
  try {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const profile = await selectProfile({
      queryKey: selectProfileKey({ userId: user.id }),
    });

    if (!profile) return { notFound: true };

    return { props: { profile } };
  } catch (exception) {
    return { notFound: true };
  }
};

export type GetOrganizationProps = {
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
};

export const getOrganizationProps: GetServerSideProps<GetOrganizationProps> =
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const orgId = validateParam(params?.organizationId, /\d+/);

      if (!orgId) return { notFound: true };

      const result = await selectMember({
        queryKey: selectMemberKey({
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

export type GetWorkflowProps = {
  workflow: Workflow;
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
};

export const getWorkflowProps: GetServerSideProps<GetWorkflowProps> = async ({
  params,
  req,
}) => {
  try {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const workflowId = validateNumberParam(params?.workflowId);
    const orgId = validateNumberParam(params?.organizationId);

    if (!workflowId || !orgId) return { notFound: true };

    const [workflow, result] = await Promise.all([
      selectWorkflow({ queryKey: selectWorkflowKey({ id: workflowId }) }),
      selectMember({
        queryKey: selectMemberKey({
          organizationId: orgId,
          userId: user.id,
        }),
      }),
    ]);

    const { member, organization, profile } = result ?? {};

    return member && organization && profile && workflow
      ? { props: { workflow, member, organization, profile } }
      : { notFound: true };
  } catch (exception) {
    return { notFound: true };
  }
};

export type GetTemplateProps = {
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
  template: Template;
};

export const getTemplateProps: GetServerSideProps<GetTemplateProps> = async ({
  params,
  req,
}) => {
  try {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const templateId = validateNumberParam(params?.templateId);
    const orgId = validateNumberParam(params?.organizationId);

    if (!orgId || !templateId) return { notFound: true };

    const [template, result] = await Promise.all([
      selectTemplate({ queryKey: selectTemplateKey({ id: templateId }) }),
      selectMember({
        queryKey: selectMemberKey({
          organizationId: orgId,
          userId: user.id,
        }),
      }),
    ]);

    const { member, organization, profile } = result ?? {};

    return member && organization && profile && template
      ? { props: { template, member, organization, profile } }
      : { notFound: true };
  } catch (exception) {
    return { notFound: true };
  }
};

export type GetTeamProps = {
  team: Team;
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
};

export const getTeamProps: GetServerSideProps<GetTeamProps> = async ({
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
      selectMember({
        queryKey: selectMemberKey({
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
