import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Replicache } from "replicache";
import { Message, useSubscribeClient } from "../../services";
import { getUrlSearchParams } from "../routing/params";
import { useMessages, UseMessagesOptions } from "./messages";
import mutators from "./mutations";
import { MessageReplicache } from "./types";

export type RepContextValue = {
  clientId?: string;
  mutations: MessageReplicache["mutate"];
  pull: MessageReplicache["pull"];
  useMessages: (options: Omit<UseMessagesOptions, "rep">) => Message[];
};

export const initialRepContextValue: RepContextValue = {
  useMessages: () => [],
  pull: () => void 0,
  mutations: {
    delMessage: async () => void 0,
    putMessage: async () => void 0,
  },
};

const RepContext = createContext<RepContextValue>(initialRepContextValue);

export const useRepContext = (): RepContextValue => useContext(RepContext);

export type RepContextProviderProps = {
  children: ReactNode;
  workflowId?: number;
  templateId: number;
};

export const RepContextProvider = ({
  children,
  templateId,
  workflowId,
}: RepContextProviderProps): React.ReactElement | null => {
  const [value, setValue] = useState<RepContextValue>();

  useEffect(() => {
    (async () => {
      const params = getUrlSearchParams({
        templateId: templateId ? String(templateId) : null,
        workflowId: workflowId ? String(workflowId) : null,
      });

      const rep = new Replicache({
        pushURL: `/api/replicache-push?${params}`,
        pullURL: `/api/replicache-pull?${params}`,
        mutators,
      });

      setValue({
        clientId: await rep.clientID,
        useMessages: (options) => useMessages({ ...options, rep }),
        mutations: rep.mutate,
        pull: rep.pull,
      });

      return () => rep.close();
    })();
  }, [templateId, workflowId]);

  useSubscribeClient({
    onChange: value?.pull,
    id: value?.clientId,
  });

  return value ? (
    <RepContext.Provider value={value}>{children}</RepContext.Provider>
  ) : null;
};

export default RepContext;
