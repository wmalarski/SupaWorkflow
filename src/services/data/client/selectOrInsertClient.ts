import { Client } from "../../types";
import { insertClient } from "./insertClient";
import { selectClient } from "./selectClient";

const selectOrInsertClient = async (id: string): Promise<Client> => {
  const selected = await selectClient({ id });
  if (selected) return selected;

  const inserted = await insertClient({ id });
  return inserted;
};

export default selectOrInsertClient;
