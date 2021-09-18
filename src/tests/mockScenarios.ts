import { User } from "@supabase/supabase-js";
import {
  defaultMember,
  defaultOrganization,
  defaultProfile,
  defaultTeam,
  defaultTemplate,
  defaultUser,
  defaultWorkflow,
  Member,
  Organization,
  Profile,
  Team,
  Template,
  Workflow,
} from "../services";
import { dbIndexCounter, mockDb } from "./mockDb";

export const addProfileScenario = (
  user?: Partial<User>,
  profile?: Partial<Omit<Profile, "id" | "user_id">>
): Profile => {
  const userId = String(dbIndexCounter());
  mockDb.user.create({
    email: user?.email ?? defaultUser.email,
    id: userId,
  });
  return mockDb.profile.create({
    id: dbIndexCounter(),
    avatar: profile?.avatar ?? null,
    name: profile?.name ?? defaultProfile.name,
    user_id: userId,
  });
};

export const addOrganizationScenario = (
  organization?: Partial<Omit<Organization, "id">>
): Organization =>
  mockDb.organization.create({
    ...defaultOrganization,
    ...organization,
    id: dbIndexCounter(),
  });

export const addOrganizationsScenario = (
  authorId: number,
  count?: number
): Organization[] =>
  Array(count ?? 5)
    .fill(defaultOrganization)
    .map((organization: Organization, index) =>
      mockDb.organization.create({
        id: dbIndexCounter(),
        author_id: authorId,
        avatar: defaultOrganization.avatar,
        description: `${organization.description}-${index}`,
        hash: `${organization.hash}-${index}`,
        name: `${organization.name}-${index}`,
      })
    );

export const addWorkflowsScenario = (count?: number): Workflow[] =>
  Array(count ?? 30)
    .fill(defaultWorkflow)
    .map((workflow: Workflow, index) =>
      mockDb.workflow.create({
        id: dbIndexCounter(),
        avatar: workflow.avatar,
        description: workflow.description,
        name: `${workflow.name}-${index}`,
        organization_id: workflow.organization_id,
        template_id: workflow.template_id,
      })
    );

export const addTemplatesScenario = (count?: number): Template[] =>
  Array(count ?? 30)
    .fill(defaultTemplate)
    .map((template: Template, index) =>
      mockDb.template.create({
        id: dbIndexCounter(),
        avatar: template.avatar,
        description: template.description,
        name: `${template.name}-${index}`,
        organization_id: template.organization_id,
      })
    );

export const addTeamsScenario = (count?: number): Team[] =>
  Array(count ?? 30)
    .fill(defaultTeam)
    .map((team: Team, index) =>
      mockDb.team.create({
        ...team,
        id: dbIndexCounter(),
        name: `${team.name}-${index}`,
      })
    );

export const addMembersScenario = ({
  count,
  organizationId,
}: { count?: number; organizationId?: number } = {}): Member[] => [
  ...Array(count ?? 30)
    .fill(defaultMember)
    .map((member: Member, index) =>
      mockDb.members.create({
        ...member,
        member_id: dbIndexCounter(),
        profile_name: `${member.profile_name}-${index}`,
        organization_id: organizationId,
      })
    ),
  mockDb.members.create({
    ...defaultMember,
    member_id: dbIndexCounter(),
    profile_name: `weird flex`,
  }),
];
