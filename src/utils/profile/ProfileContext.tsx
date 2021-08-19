import { createContext, ReactNode, useContext } from "react";
import { Profile } from "../../services/types";
import { defaultProfile } from "../../services/utils/defaults";

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
  if (value.isInitialized) throw "Profile Context not initialized";
  return value.profile;
};

export type ProfileContextProviderProps = {
  profile: Profile;
  children: ReactNode;
};

export const ProfileContextProvider = ({
  profile,
  children,
}: ProfileContextProviderProps): JSX.Element => (
  <ProfileContext.Provider value={{ profile, isInitialized: true }}>
    {children}
  </ProfileContext.Provider>
);

export default ProfileContext;
