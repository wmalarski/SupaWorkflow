import { MessageVersion } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export const selectMessageVersion =
  async (): Promise<MessageVersion | null> => {
    const { data, error } = await fromSupabase("messageVersion")
      .select("*")
      .limit(1);

    if (error) throw error;

    return data?.[0] ?? null;
  };
