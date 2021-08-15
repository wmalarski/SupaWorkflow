import { Mutation } from "../../utils/rep/types";
import { UpsertMessageArgs } from "../data/message/upsertMessages";

const resolvePush = (mutation: Mutation): UpsertMessageArgs => {
  switch (mutation.name) {
    case "createMessage":
      return mutation.args;
    case "deleteMessage":
      return { id: mutation.args.id, deleted: true };
  }
};

export default resolvePush;
