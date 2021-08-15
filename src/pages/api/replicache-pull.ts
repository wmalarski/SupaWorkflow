import type { NextApiRequest, NextApiResponse } from "next";
import { selectClient } from "../../services/data/client/selectClient";
import { selectMessages } from "../../services/data/message/selectMessages";
import { selectMessageVersion } from "../../services/data/message/selectMessageVersion";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { clientID, cookie } = req.body;
  console.log(`Processing pull`, JSON.stringify(req.body));

  try {
    console.log({ clientID, cookie: cookie ?? 0 });

    const [client, changed, maxVersion] = await Promise.all([
      selectClient({ id: clientID }),
      selectMessages({ version: cookie ?? 0 }),
      selectMessageVersion(),
    ]);

    const newCookie = maxVersion?.max_version;
    const lastMutationID = client?.last_mutation_id ?? 0;

    const patch = [
      ...(!cookie ? [{ op: "clear" }] : []),
      ...changed.map((row) => ({
        op: "put",
        key: `message/${row.id}`,
        value: {
          from: row.sender,
          content: row.content,
          order: row.ord,
        },
      })),
    ];

    res.json({ lastMutationID, cookie: newCookie, patch });
    res.end();
  } catch (e) {
    console.error("Here", e);
    res.status(500).send(e.toString());
  }
};

export default handler;
