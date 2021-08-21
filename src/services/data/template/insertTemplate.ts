import { PostgrestError } from "@supabase/supabase-js";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
  useQueryClient,
} from "react-query";
import { Template } from "../../types";
import fromSupabase from "../../utils/fromSupabase";
import { selectTemplatesKey } from "./selectTemplates";

export type InsertTemplateArgs = Omit<Template, "id">;

export const insertTemplate = async (
  args: InsertTemplateArgs
): Promise<Template> => {
  const { data, error } = await fromSupabase("template").insert(args).single();

  if (error || !data) throw error;

  return data;
};

export const useInsertTemplate = (
  options?: UseMutationOptions<Template, PostgrestError, InsertTemplateArgs>
): UseMutationResult<Template, PostgrestError, InsertTemplateArgs> => {
  const queryClient = useQueryClient();
  return useMutation(insertTemplate, {
    ...options,
    onSuccess: (template, ...args) => {
      queryClient.invalidateQueries(
        selectTemplatesKey({ organization_id: template.organization_id })
      );
      options?.onSuccess?.(template, ...args);
    },
  });
};
