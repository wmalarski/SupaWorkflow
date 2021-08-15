import { createContext, ReactNode, useContext, useMemo } from "react";
import { Replicache } from "replicache";
import mutators from "./mutations";

export type RepContextValue = Replicache<typeof mutators>;

const getRep = (): RepContextValue =>
  new Replicache({
    pushURL: "/api/replicache-push",
    pullURL: "/api/replicache-pull",
    wasmModule: "/replicache.wasm",
    mutators,
  });

const RepContext = createContext<RepContextValue>(getRep());

export const useRepContext = (): RepContextValue => useContext(RepContext);

export type RepContextProviderProps = {
  children: ReactNode;
};

export const RepContextProvider = ({
  children,
}: RepContextProviderProps): JSX.Element | null => {
  const rep = useMemo(getRep, []);

  return <RepContext.Provider value={rep}>{children}</RepContext.Provider>;
};

export default RepContext;
