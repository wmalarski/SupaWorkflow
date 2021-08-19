import { Profile } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectProfileArgs = {
  userId: string;
};

export const selectProfile = async ({
  userId,
}: SelectProfileArgs): Promise<Profile | null> => {
  const { data, error } = await fromSupabase("profile")
    .select("*")
    .eq("user_id", userId)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};
