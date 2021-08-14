import { deleteMessage } from "../data/message/deleteMessage";
import { insertMessage } from "../data/message/insertMessage";
import { Mutation } from "./mutators";

const resolve = async (mutation: Mutation): Promise<void> => {
  switch (mutation.name) {
    case "createMessage":
      return void (await insertMessage(mutation.args));
    case "deleteMessage":
      return deleteMessage(mutation.args);
  }
};

export default resolve;
