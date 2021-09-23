import { User } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUpdateAuth } from "../auth/updateAuth";
import { supabase } from "../supabase";

export type UserContextValue = {
  isInitialized: boolean;
  user: User | null;
};

const UserContext = createContext<UserContextValue>({
  isInitialized: false,
  user: null,
});

export const useUserContext = (): UserContextValue => useContext(UserContext);

export type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): React.ReactElement => {
  const [user, setUser] = useState<UserContextValue>({
    isInitialized: false,
    user: null,
  });

  const { mutate: updateAuth } = useUpdateAuth();

  useEffect(
    () => setUser({ isInitialized: true, user: supabase.auth.user() }),
    []
  );

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      updateAuth({ event, session });

      setUser({ isInitialized: true, user: session?.user ?? null });
    });
    return () => data?.unsubscribe?.();
  }, [updateAuth]);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
