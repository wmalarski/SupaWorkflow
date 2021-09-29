import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "services";
import { validateNumberParam } from "utils";
import resolvePull from "utils/rep/resolvePull";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { clientID, cookie } = req.body;
  supabase.auth.setAuth(req.cookies["sb:token"]);

  const templateId = validateNumberParam(req.query.templateId);
  const workflowId = validateNumberParam(req.query.workflowId);

  console.log(
    `Processing pull`,
    JSON.stringify({ ...req.body, templateId, workflowId })
  );

  if (!templateId) {
    res.status(400).end();
    return;
  }

  try {
    const response = resolvePull({
      clientId: clientID,
      cookie,
      templateId,
      workflowId,
    });

    res.json(response);
    res.end();
  } catch (error) {
    console.log("PULL error:", { error });
    res.status(500).send(String(error));
  }
};

export default handler;
