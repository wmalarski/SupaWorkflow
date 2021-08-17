import { useSubscribe } from "replicache-react";
import { Message } from "../../services/types";
import { useRepContext } from "./RepContext";
import repKeys from "./repKeys";

export type UseMessagesOptions = {
  templateId: number;
  workflowId?: number;
};

export const useMessages = ({
  templateId,
  workflowId,
}: UseMessagesOptions): Message[] => {
  const rep = useRepContext();

  return useSubscribe<Message[]>(
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
};
