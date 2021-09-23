import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../services";

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  supabase.auth.api.setAuthCookie(req, res);
};

export default handler;
