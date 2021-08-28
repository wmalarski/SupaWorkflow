import {
  defaultOrganization,
  defaultProfile,
  Organization,
  Profile,
} from "../services";
import { mockDb } from "./mockDb";

export const addProfile = (profile?: Partial<Omit<Profile, "id">>): Profile =>
  mockDb.profile.create({
    avatar: profile?.avatar ?? null,
    name: profile?.name ?? defaultProfile.name,
    user_id: profile?.user_id ?? defaultProfile.user_id,
  });

export const addOrganizations = (
  authorId: number,
  count?: number
): Organization[] =>
  Array(count)
    .fill(defaultOrganization)
    .map((organization: Organization, index) =>
      mockDb.organization.create({
        author_id: authorId,
        avatar: defaultOrganization.avatar,
        description: `${organization.description}-${index}`,
        hash: `${organization.hash}-${index}`,
        name: `${organization.name}-${index}`,
      })
    );
