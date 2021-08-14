import { createClient } from "@supabase/supabase-js";
import { TableMapping } from "./types";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);

export const AUTH_ENDPOINT = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/auth/v1`;

export const SUPABASE_ENDPOINT = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1`;

export enum SupabaseErrorCode {
  UniquenessViolation = "23505",
}

export const TABLES: Record<keyof TableMapping, string> = {
  client: "replicache_client",
  message: "message",
  messageVersion: "max_message_version",
};
