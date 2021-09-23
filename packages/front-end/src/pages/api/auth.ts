import { supabase } from "@supa-workflow/services";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
