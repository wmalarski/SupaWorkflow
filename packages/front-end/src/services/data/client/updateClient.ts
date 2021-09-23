import { Client } from "../../types";
import fromSupabase from "../../utils/fromSupabase";

export type UpdateClientArgs = Client;

export const updateClient = async ({
  id,
  last_mutation_id,
}: UpdateClientArgs): Promise<Client> => {
  const { data, error } = await fromSupabase("client")
    .update({ id, last_mutation_id })
    .eq("id", id)
    .single();

  if (error || !data) throw error;

  return data;
};
