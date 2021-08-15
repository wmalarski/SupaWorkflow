import { UpsertMessageArgs } from "../../services/data/message/upsertMessages";
import { Mutation } from "../../utils/rep/types";

const resolvePush = (mutation: Mutation): UpsertMessageArgs => {
  switch (mutation.name) {
    case "createMessage":
      return mutation.args;
    case "deleteMessage":
      return { id: mutation.args.id, deleted: true };
  }
};

export default resolvePush;
