import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { DashboardSwitch, LoadingPane } from "../../organisms";
import { Profile } from "../../services";
import { paths, ProfileContextProvider, useUserContext } from "../../utils";

export type DashboardPageProps = {
  profile: Profile;
};

const DashboardPage = (): React.ReactElement => {
  const router = useRouter();
  const { user } = useUserContext();

  useEffect(() => {
    if (!router.isReady || user) return;
    router.push(paths.notFound);
  }, [router, user]);

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
