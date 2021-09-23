import { Message } from "@supa-workflow/services";
import { useSubscribe } from "replicache-react";
import repKeys from "./repKeys";
import { MessageReplicache } from "./types";

export type UseMessagesOptions = {
  templateId: number;
  workflowId?: number;
  rep: MessageReplicache;
};

export const useMessages = ({
  templateId,
  workflowId,
  rep,
}: UseMessagesOptions): Message[] =>
  useSubscribe<Message[]>(
    rep,
    async (tx) => {
      const list = await tx
        .scan({ prefix: repKeys.messages({ templateId, workflowId }) })
        .entries()
        .toArray();

      return list.map(([, message]) => message as Message);
    },
    [],
    [templateId, workflowId]
  );
