import { User } from "@supabase/supabase-js";
import {
  defaultOrganization,
  defaultProfile,
  defaultUser,
  Organization,
  Profile,
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
  Array(count)
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
