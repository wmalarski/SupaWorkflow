import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { Client } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectClientKey } from "./selectClient";

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

export const useUpdateClient = (
  options?: UseMutationOptions<Client, PostgrestError, UpdateClientArgs>
): UseMutationResult<Client, PostgrestError, UpdateClientArgs> => {
  const queryClient = useQueryClient();

  return useMutation(updateClient, {
    ...options,
    onSuccess: (item, ...args) => {
      queryClient.invalidateQueries(selectClientKey({ id: item.id }));
      options?.onSuccess?.(item, ...args);
    },
  });
};
