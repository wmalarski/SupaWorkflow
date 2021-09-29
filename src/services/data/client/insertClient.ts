import fromSupabase from "../../helpers/fromSupabase";
import { Client } from "../../types";

export type InsertClientArgs = Omit<Client, "last_mutation_id">;

export const insertClient = async (args: InsertClientArgs): Promise<Client> => {
  const { data, error } = await fromSupabase("client")
    .insert({ ...args, last_mutation_id: 0 })
    .single();

  if (error || !data) throw error;

  return data;
};
