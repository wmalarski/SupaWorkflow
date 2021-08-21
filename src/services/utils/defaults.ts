import { User } from "@supabase/supabase-js";
import {
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

export const defaultOrganizationMember: OrganizationMember = {
  id: 1,
  organization_id: 1,
  profile_id: 1,
  role: "user",
};
