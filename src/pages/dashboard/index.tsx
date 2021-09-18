import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { DashboardSwitch, LoadingPane } from "../../organisms";
import { paths, ProfileContextProvider, useUserContext } from "../../utils";

const DashboardPage = (): React.ReactElement => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();

  useEffect(() => {
    console.log("router.isReady", router.isReady, user, isInitialized);
    if (!router.isReady || !isInitialized || user) return;
    router.push(paths.notFound);
  }, [isInitialized, router, user]);

  return user ? (
    <ProfileContextProvider
      userId={user.id}
      fallback={<LoadingPane />}
      onError={(error) => {
        console.log("error", error);
        router.push(paths.notFound);
      }}
    >
      <DashboardSwitch />
    </ProfileContextProvider>
  ) : (
    <LoadingPane />
  );
};

export default DashboardPage;
