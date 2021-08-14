import { SupabaseQueryBuilder } from "@supabase/supabase-js/dist/main/lib/SupabaseQueryBuilder";
import { supabase, TABLES } from "../supabase";
import { TableMapping } from "../types";

const fromSupabase = <
  TKey extends keyof TableMapping,
  TData = TableMapping[TKey]
>(
  table: TKey
): SupabaseQueryBuilder<TData> => supabase.from<TData>(TABLES[table]);

export default fromSupabase;
