import fromSupabase from "../../helpers/fromSupabase";
import { Client } from "../../types";

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
