import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import fetch from "cross-fetch";
import {
  useMutation,
  UseMutationOptions,
  UseMutationResult,
} from "react-query";

export type UpdateAuthArgs = {
  event?: AuthChangeEvent;
  session?: Session | null;
};

export const updateAuth = (args: UpdateAuthArgs): Promise<Response> =>
  fetch("/api/auth", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    credentials: "same-origin",
    body: JSON.stringify(args),
  });

export const useUpdateAuth = (
  options?: UseMutationOptions<Response, Error, UpdateAuthArgs>
): UseMutationResult<Response, Error, UpdateAuthArgs> =>
  useMutation(updateAuth, options);
