import { MessageState } from "./nodes";

export type Profile = {
  id: number;
  name: string;
  user_id: string;
  avatar: string | null;
};

export type Organization = {
  id: number;
  author_id: number;
  name: string;
  description: string;
  hash: string;
  avatar: string | null;
};

export type OrganizationRole = "owner" | "mod" | "user" | "guest";

export type OrganizationMember = {
  id: number;
  profile_id: number;
  organization_id: number;
  role: OrganizationRole;
};

export type Member = {
  profile_id: number;
  profile_name: string;
  profile_user_id: string;
  profile_avatar: string | null;
  member_id: number;
  member_role: OrganizationRole;
  organization_id: number;
  organization_author_id: number;
  organization_name: string;
  organization_description: string;
  organization_hash: string;
  organization_avatar: string | null;
};

export type Team = {
  id: number;
  organization_id: number;
  name: string;
  description: string;
  color: string;
  avatar: string | null;
};

export type TeamRole = "mod" | "user";

export type TeamMember = {
  id: number;
  profile_id: number;
  team_id: number;
  role: TeamRole;
};

export type Template = {
  id: number;
  organization_id: number;
  name: string;
  description: string;
  avatar: string | null;
};

export type Message = {
  id: string;
  template_id: number;
  workflow_id: number | null;
  state: MessageState;
  updated_at: string;
  deleted: boolean;
};

export type Workflow = {
  id: number;
  organization_id: number;
  template_id: number;
  name: string;
  description: string;
  avatar: string | null;
};

export type Client = {
  id: string;
  last_mutation_id: number;
};

export type TableMapping = {
  profile: Profile;
  members: Member;
  organization: Organization;
  organizationMember: OrganizationMember;
  team: Team;
  teamMember: TeamMember;
  template: Template;
  workflow: Workflow;
  message: Message;
  client: Client;
};

export type ResponseError = {
  error: string;
  error_description: string;
};
