import type { NextApiRequest, NextApiResponse } from "next";
import { selectClient } from "../../services/data/client/selectClient";
import { selectMessages } from "../../services/data/message/selectMessages";
import { selectMessageVersion } from "../../services/data/message/selectMessageVersion";

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { clientID, cookie: version = 0 } = req.body;
  console.log(`Processing pull`, JSON.stringify(req.body));

  try {
    const [client, changed, maxVersion] = await Promise.all([
      selectClient({ id: clientID }),
      selectMessages({ version }),
      selectMessageVersion(),
    ]);

    const cookie = maxVersion?.max_version;
    const lastMutationID = client?.last_mutation_id ?? 0;

    console.log({ cookie, lastMutationID, changed });

    const patch = [
      ...[!version ? { op: "clear" } : []],
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

    res.json({ lastMutationID, cookie, patch });
    res.end();
  } catch (e) {
    console.error(e);
    res.status(500).send(e.toString());
  }
};

export default handler;
