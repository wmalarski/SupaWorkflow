import { GetServerSideProps } from "next";
import React from "react";
import DashboardSwitch from "../../organisms/DashboardSwitch/DashboardSwitch";
import {
  Profile,
  selectProfile,
  selectProfileKey,
  supabase,
} from "../../services";
import {
  DashboardTab,
  ProfileContextProvider,
  validateParam,
} from "../../utils";

export type DashboardPageProps = {
  tab: DashboardTab | null;
  profile: Profile;
};

const DashboardPage = ({ tab, profile }: DashboardPageProps): JSX.Element => (
  <ProfileContextProvider profile={profile}>
    <DashboardSwitch tab={tab} />
  </ProfileContextProvider>
);

export const getServerSideProps: GetServerSideProps<DashboardPageProps> =
  async ({ req, query }) => {
    try {
      const tab = validateParam(query?.tab);
      const dashboardTab =
        tab && tab in DashboardTab
          ? DashboardTab[tab as keyof typeof DashboardTab]
          : null;

      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const profile = await selectProfile({
        queryKey: selectProfileKey({ userId: user.id }),
      });

      if (!profile) return { notFound: true };

      return { props: { profile, tab: dashboardTab } };
    } catch (exception) {
      return { notFound: true };
    }
  };

export default DashboardPage;
