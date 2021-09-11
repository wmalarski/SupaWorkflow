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
  profile: Profile;
  children: ReactNode;
  enabled?: boolean;
};

export const ProfileContextProvider = ({
  profile,
  children,
  enabled,
}: ProfileContextProviderProps): React.ReactElement => {
  const { data } = useSelectProfile(
    { userId: profile.user_id },
    { initialData: profile, enabled }
  );

  const value = useMemo(
    () => ({ profile: data ?? profile, isInitialized: true }),
    [data, profile]
  );

  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
