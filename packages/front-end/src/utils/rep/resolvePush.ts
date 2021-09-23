import { UpsertMessageArgs } from "@supa-workflow/services";
import { Mutation } from "./types";

const resolvePush = (mutation: Mutation): UpsertMessageArgs => {
  switch (mutation.name) {
    case "putMessage":
      return { deleted: false, ...mutation.args };
    case "delMessage":
      return { deleted: true, ...mutation.args };
  }
};

export default resolvePush;