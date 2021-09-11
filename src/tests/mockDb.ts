import { factory, primaryKey } from "@mswjs/data";
import { Message, MessageNode, OrganizationRole, TeamRole } from "../services";

export const dbIndexCounter = (() => {
  let index = 1;
  return () => {
    const result = index;
    index += 1;
    return result;
  };
})();

export const mockDb = factory({
  user: {
    id: primaryKey(String),
    email: String,
  },
  profile: {
    id: primaryKey(Number),
    name: String,
    user_id: String,
    avatar: (): string | null => null,
  },
  organization: {
    id: primaryKey(Number),
    author_id: Number,
    name: String,
    description: String,
    hash: (): string => "hash",
    avatar: (): string | null => null,
  },
  organizationMembers: {
    id: primaryKey(Number),
    profile_id: Number,
    organization_id: Number,
    role: (): OrganizationRole => "user",
  },
  members: {
    profile_id: Number,
    profile_name: String,
    profile_user_id: String,
    profile_avatar: (): string | null => null,
    member_id: primaryKey(Number),
    member_role: (): OrganizationRole => "user",
    organization_id: Number,
    organization_author_id: Number,
    organization_name: String,
    organization_description: String,
    organization_hash: String,
    organization_avatar: (): string | null => null,
  },
  team: {
    id: primaryKey(Number),
    organization_id: Number,
    name: String,
    description: String,
    color: String,
    avatar: (): string | null => null,
  },
  teamMember: {
    id: primaryKey(Number),
    profile_id: Number,
    team_id: Number,
    role: (): TeamRole => "mod",
  },
  template: {
    id: primaryKey(Number),
    organization_id: Number,
    name: String,
    description: String,
    avatar: (): string | null => null,
  },
  message: {
    id: primaryKey(String),
    template_id: Number,
    workflow_id: (): number | null => null,
    data: (): MessageNode => ({ kind: "node", position: { x: 0, y: 0 } }),
    updated_at: String,
    deleted: Boolean,
  },
  workflow: {
    id: primaryKey(Number),
    organization_id: Number,
    template_id: Number,
    template_data: (): Message[] => [],
    name: String,
    description: String,
    avatar: (): string | null => null,
  },
  client: {
    id: primaryKey(String),
    last_mutation_id: Number,
  },
});
