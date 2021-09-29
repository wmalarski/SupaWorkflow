import fromSupabase from "../../helpers/fromSupabase";
import { Client } from "../../types";

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
