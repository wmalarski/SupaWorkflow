import type { NextApiRequest, NextApiResponse } from "next";
import { PullResponse } from "replicache";
import { selectClient } from "../../services/data/client/selectClient";
import { selectMessages } from "../../services/data/message/selectMessages";
import { selectMessageVersion } from "../../services/data/message/selectMessageVersion";
import resolvePull from "../../utils/rep/resolvePull";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { clientID, cookie } = req.body;
  console.log(`Processing pull`, JSON.stringify(req.body));

  try {
    const [client, changed, maxVersion] = await Promise.all([
      selectClient({ id: clientID }),
      selectMessages({ version: cookie ?? 0 }),
      selectMessageVersion(),
    ]);

    const newCookie = maxVersion?.max_version ?? 0;
    const lastMutationID = client?.last_mutation_id ?? 0;

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
  } catch (e) {
    console.error("Here", e);
    res.status(500).send(e.toString());
  }
};

export default handler;
