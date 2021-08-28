import { factory, primaryKey } from "@mswjs/data";

export const dbIndexCounter = (() => {
  let index = 1;
  return () => {
    const result = index;
    index += 1;
    return result;
  };
})();

export const mockDb = factory({
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
});
