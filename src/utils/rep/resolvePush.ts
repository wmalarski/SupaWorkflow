import { UpsertMessageArgs } from "../../services/data/message/upsertMessages";
import { Mutation } from "../../utils/rep/types";

const resolvePush = (mutation: Mutation): UpsertMessageArgs => {
  switch (mutation.name) {
    case "putMessage":
      return { deleted: false, ...mutation.args };
    case "deleteMessage":
      return { deleted: true, ...mutation.args };
  }
};

export default resolvePush;
