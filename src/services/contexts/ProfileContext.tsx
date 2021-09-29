import { PostgrestError } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectProfile } from "../data/profile/selectProfile";
import { defaultProfile } from "../helpers/defaults";
import { Profile } from "../types";

export type ProfileContextValue = {
  profile: Profile;
  isInitialized: boolean;
};

export const ProfileContext = createContext<ProfileContextValue>({
  profile: defaultProfile,
  isInitialized: false,
});

export const useProfileContext = (): Profile => {
  const value = useContext(ProfileContext);
  if (!value.isInitialized) throw "Profile Context not initialized";
  return value.profile;
};

export type ProfileContextProviderProps = {
  userId: string;
  children: ReactNode;
  fallback?: ReactNode;
  enabled?: boolean;
  initialData?: Profile;
  onError?: (err: PostgrestError) => void;
};

export const ProfileContextProvider = ({
  userId,
  children,
  fallback,
  enabled,
  initialData,
  onError,
}: ProfileContextProviderProps): React.ReactElement | null => {
  const { data } = useSelectProfile(
    { userId },
    { initialData, enabled, onError }
  );

  const profileValue = useMemo(
    () => data && { profile: data, isInitialized: true },
    [data]
  );

  return profileValue ? (
    <ProfileContext.Provider value={profileValue}>
      {children}
    </ProfileContext.Provider>
  ) : (
    <>{fallback}</>
  );
};
