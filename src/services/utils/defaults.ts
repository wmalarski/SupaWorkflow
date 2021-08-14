import { User } from "@supabase/supabase-js";

export const defaultUser: User = {
  app_metadata: { provider: "email" },
  aud: "authenticated",
  created_at: new Date().toISOString(),
  id: "qwertyuiop",
  user_metadata: {},
  role: "authenticated",
  email: "example@example.com",
};
