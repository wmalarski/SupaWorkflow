import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../services/supabase";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
