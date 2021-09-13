import { User } from "@supabase/supabase-js";
import { Message } from "..";
import { MessageNodeType } from "../nodes";
import {
  Member,
  Organization,
  OrganizationMember,
  Profile,
  Team,
  TeamMember,
  Template,
  Workflow,
} from "../types";

export const defaultUser: User = {
  app_metadata: { provider: "email" },
  aud: "authenticated",
  created_at: new Date().toISOString(),
  id: "qwertyuiop",
  user_metadata: {},
  role: "authenticated",
  email: "example@example.com",
};

export const defaultProfile: Profile = {
  avatar: null,
  id: 1,
  name: "Profile Name",
  user_id: "qwertyuiop",
};

export const defaultMember: Member = {
  member_id: 1,
  member_role: "user",
  organization_author_id: 1,
  organization_avatar: null,
  organization_description: "Organization Description",
  organization_hash: "hash-hash",
  organization_id: 1,
  organization_name: "Organization Name",
  profile_avatar: null,
  profile_id: 1,
  profile_name: "Profile Name",
  profile_user_id: "qwertyuiop",
};

export const defaultOrganization: Organization = {
  author_id: 1,
  avatar: null,
  description: "Organization Description",
  hash: "hash-hash",
  id: 1,
  name: "Organization Name",
};

export const defaultTemplate: Template = {
  avatar: null,
  description: "Template Description",
  id: 1,
  name: "Template Name",
  organization_id: 1,
};

export const defaultWorkflow: Workflow = {
  avatar: null,
  description: "Workflow Description",
  id: 1,
  name: "Workflow Name",
  organization_id: 1,
  template_data: [],
  template_id: 1,
};

export const defaultTeamMember: TeamMember = {
  id: 1,
  profile_id: 1,
  role: "mod",
  team_id: 1,
};

export const defaultTeam: Team = {
  avatar: null,
  color: "#ff0000",
  description: "Team Description",
  id: 1,
  name: "Team Name",
  organization_id: 1,
};

export const defaultTeams: Team[] = Array(5)
  .fill(defaultTeam)
  .map((team, index) => ({
    ...team,
    id: index,
    name: `${team.name}-${index}`,
  }));

export const defaultOrganizationMember: OrganizationMember = {
  id: 1,
  organization_id: 1,
  profile_id: 1,
  role: "user",
};

export const defaultMessage: Message = {
  data: {
    kind: "node",
    datatype: MessageNodeType.ChecklistTemplate,
    position: { x: 0, y: 0 },
    tasks: ["task1", "task2"],
    isTargetAll: true,
    teamIds: [1, 2],
    description: "",
    title: "",
  },
  deleted: false,
  id: "1",
  template_id: 1,
  updated_at: "",
  workflow_id: 1,
};
