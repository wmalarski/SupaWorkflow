import { createContext, ReactNode, useContext, useMemo } from "react";
import { defaultProfile, Profile, useSelectProfile } from "../../services";

export type ProfileContextValue = {
  profile: Profile;
  isInitialized: boolean;
};

const ProfileContext = createContext<ProfileContextValue>({
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
};

export const ProfileContextProvider = ({
  userId,
  children,
  fallback,
  enabled,
  initialData,
}: ProfileContextProviderProps): React.ReactElement | null => {
  const { data } = useSelectProfile({ userId }, { initialData, enabled });

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

export default ProfileContext;
