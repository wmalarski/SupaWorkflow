import {
  defaultOrganization,
  defaultProfile,
  Organization,
  Profile,
} from "../services";
import { dbIndexCounter, mockDb } from "./mockDb";

export const addProfileScenario = (
  profile?: Partial<Omit<Profile, "id">>
): Profile =>
  mockDb.profile.create({
    id: dbIndexCounter(),
    avatar: profile?.avatar ?? null,
    name: profile?.name ?? defaultProfile.name,
    user_id: profile?.user_id ?? defaultProfile.user_id,
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
