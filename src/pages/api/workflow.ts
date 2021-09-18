import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "../../services";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  console.log({ cookies: req.cookies, body: req.body, headers: req.headers });
  supabase.auth.setAuth(req.cookies["sb:token"]);

  res.status(200).end();
};

export default handler;
