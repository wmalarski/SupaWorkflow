import { useSubscribe } from "replicache-react";
import { Message } from "../../services/types";
import { useRepContext } from "./RepContext";

export const useMessages = (): Message[] => {
  const rep = useRepContext();

  return useSubscribe<Message[]>(
    rep,
    async (tx) => {
      const list = await tx.scan({ prefix: "message/" }).entries().toArray();
      return list
        .map(([, message]) => message as Message)
        .sort((a, b) => (a.ord = b.ord));
    },
    []
  );
};
