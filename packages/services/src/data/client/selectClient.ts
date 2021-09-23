import { Client } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type SelectClientArgs = { id: string };

export const selectClient = async ({
  id,
}: SelectClientArgs): Promise<Client | null> => {
  const { data, error } = await fromSupabase("client")
    .select("*")
    .eq("id", id)
    .limit(1);

  if (error) throw error;

  return data?.[0] ?? null;
};
