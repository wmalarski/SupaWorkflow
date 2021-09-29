import type { NextApiRequest, NextApiResponse } from "next";
import {
  insertWorkflow,
  InsertWorkflowArgs,
  mapTemplateToWorkflow,
  selectMessages,
  supabase,
  upsertMessages,
} from "services";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  supabase.auth.setAuth(req.cookies["sb:token"]);

  const args: InsertWorkflowArgs = req.body;

  try {
    const templateMessages = await selectMessages({
      templateId: args.template_id,
      workflowId: null,
      deleted: false,
    });

    const workflow = await insertWorkflow(args);

    const workflowMessages = mapTemplateToWorkflow({
      messages: templateMessages,
      workflowId: workflow.id,
    });

    await upsertMessages(workflowMessages);

    res.status(200).json(workflow);
    res.end();
  } catch (error) {
    console.log("Workflow error:", { error });
    res.status(500).send(String(error));
  }
};

export default handler;
