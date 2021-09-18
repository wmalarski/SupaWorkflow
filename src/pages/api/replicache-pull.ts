import type { NextApiRequest, NextApiResponse } from "next";
import { PullResponse } from "replicache";
import { selectClient, selectMessages, supabase } from "../../services";
import resolvePull from "../../utils/rep/resolvePull";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { clientID, cookie } = req.body;
  supabase.auth.setAuth(req.cookies["sb:token"]);
  console.log(`Processing pull`, JSON.stringify(req.body));

  try {
    const [client, changed] = await Promise.all([
      selectClient({ id: clientID }),
      selectMessages({ updatedAt: cookie }),
    ]);

    // TODO: check this logic
    const dates = changed
      .map((message) => new Date(message.updated_at).getTime())
      .sort();

    const lastDate = dates[dates.length - 1] ?? 0;
    const newCookie = lastDate && new Date(lastDate).toISOString();
    const lastMutationID = client?.last_mutation_id ?? 0;

    console.log({ changed, newCookie });

    const patch = [
      ...(!cookie ? [{ op: "clear" } as const] : []),
      ...changed.map(resolvePull),
    ];

    const response: PullResponse = {
      cookie: newCookie,
      lastMutationID,
      patch,
    };

    res.json(response);
    res.end();
  } catch (error) {
    console.log("PULL error:", { error });
    res.status(500).send(String(error));
  }
};

export default handler;
