import { useRouter } from "next/router";
import { DashboardSwitch, LoadingPane } from "organisms";
import React, { useEffect } from "react";
import { paths, ProfileContextProvider, useUserContext } from "utils";

const DashboardPage = (): React.ReactElement => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();

  useEffect(() => {
    if (!router.isReady || !isInitialized || user) return;
    router.push(paths.notFound);
  }, [isInitialized, router, user]);

  return user ? (
    <ProfileContextProvider
      userId={user.id}
      fallback={<LoadingPane />}
      onError={() => router.push(paths.notFound)}
    >
      <DashboardSwitch />
    </ProfileContextProvider>
  ) : (
    <LoadingPane />
  );
};

export default DashboardPage;
