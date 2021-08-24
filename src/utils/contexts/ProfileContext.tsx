import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { defaultProfile, Profile, useSelectProfile } from "../../services";
import { useUserContext } from "./UserContext";

export type ProfileContextValue = Profile;

const ProfileContext = createContext<ProfileContextValue>(defaultProfile);

export const useProfileContext = (): Profile => useContext(ProfileContext);

export type ProfileContextProviderProps = {
  userId: string;
  children: ReactNode;
  fallback?: ReactNode;
};

export const ProfileContextProvider = ({
  userId,
  children,
  fallback,
}: ProfileContextProviderProps): JSX.Element => {
  const { data } = useSelectProfile({ userId });

  return data ? (
    <ProfileContext.Provider value={data}>{children}</ProfileContext.Provider>
  ) : (
    <>{fallback}</>
  );
};

export type RouteProfileContextProviderProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export const RouteProfileContextProvider = ({
  children,
  fallback,
}: RouteProfileContextProviderProps): JSX.Element | null => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();

  useEffect(() => {
    if (!isInitialized || !router.isReady || user) return;
    router.push("/404");
  }, [isInitialized, user, router]);

  if (!user) return <>{fallback}</>;

  return (
    <ProfileContextProvider userId={user.id}>{children}</ProfileContextProvider>
  );
};

export default ProfileContext;
