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

export type MessageNode = {
  kind: "test";
  name: string;
};

export type Message = {
  id: string;
  template_id: number;
  workflow_id: number | null;
  data: MessageNode;
  updated_at: string;
  deleted: boolean;
};

export type Workflow = {
  id: number;
  organization_id: number;
  template_id: number;
  template_data: Message[];
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
  organization: Organization;
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

export type TeamMemberPair = {
  team: Team;
  member: TeamMember;
};
