import { User } from "@supabase/supabase-js";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useUpdateAuth } from "../../services/auth/updateAuth";
import { supabase } from "../../services/supabase";

export type UserContextValue = {
  user: User | null;
};

const UserContext = createContext<UserContextValue>({
  user: null,
});

export const useUserContext = (): UserContextValue => useContext(UserContext);

export type UserContextProviderProps = {
  children: ReactNode;
};

export const UserContextProvider = ({
  children,
}: UserContextProviderProps): JSX.Element => {
  const [user, setUser] = useState<User | null>(supabase.auth.user());

  const { mutate: updateAuth } = useUpdateAuth();

  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange(async (event, session) => {
      updateAuth({ event, session });

      setUser(session?.user ?? null);
    });
    return () => data?.unsubscribe?.();
  }, [updateAuth]);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};

export default UserContext;
