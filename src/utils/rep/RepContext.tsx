import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { Replicache } from "replicache";
import { useSubscribeClient } from "../../services";
import mutators from "./mutations";

export type RepContextValue = Replicache<typeof mutators>;

const rep: RepContextValue = new Replicache({
  pushURL: "/api/replicache-push",
  pullURL: "/api/replicache-pull",
  wasmModule: "/replicache.wasm",
  mutators,
});

const RepContext = createContext<RepContextValue>(rep);

export const useRepContext = (): RepContextValue => useContext(RepContext);

export const useRepMutations = (): RepContextValue["mutate"] =>
  useRepContext().mutate;

export type RepContextProviderProps = {
  children: ReactNode;
};

export const RepContextProvider = ({
  children,
}: RepContextProviderProps): React.ReactElement | null => {
  const [clientId, setClientId] = useState<string>();

  useEffect(() => {
    (async () => setClientId(await rep.clientID))();
  }, []);

  useSubscribeClient({
    onChange: rep.pull,
    id: clientId,
  });

  return <RepContext.Provider value={rep}>{children}</RepContext.Provider>;
};

export default RepContext;
