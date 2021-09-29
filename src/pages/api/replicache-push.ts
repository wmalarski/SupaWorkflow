import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "services";
import resolvePush from "utils/rep/resolvePush";
import { MutationPush } from "utils/rep/types";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  supabase.auth.setAuth(req.cookies["sb:token"]);

  const push: MutationPush = req.body;
  console.log("Processing push");

  try {
    await resolvePush({
      clientId: push.clientID,
      pushMutations: push.mutations,
    });
  } catch (error) {
    console.log("PUSH error:", { error });
  }
  res.json({});
};

export default handler;
