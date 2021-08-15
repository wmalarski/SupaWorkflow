import { Mutation } from "../../utils/rep/types";
import { deleteMessage } from "../data/message/deleteMessage";
import { insertMessage } from "../data/message/insertMessage";

const resolvePush = async (mutation: Mutation): Promise<void> => {
  switch (mutation.name) {
    case "createMessage":
      return void (await insertMessage(mutation.args));
    case "deleteMessage":
      return deleteMessage(mutation.args);
  }
};

export default resolvePush;
