import { GetServerSideProps } from "next";
import React from "react";
import DashboardSwitch from "../../organisms/DashboardSwitch/DashboardSwitch";
import {
  Profile,
  selectProfile,
  selectProfileKey,
  supabase,
} from "../../services";
import { DashboardTab, ProfileContextProvider, useTabParam } from "../../utils";

export type DashboardPageProps = {
  profile: Profile;
};

const DashboardPage = ({ profile }: DashboardPageProps): JSX.Element => {
  const tab = useTabParam(DashboardTab);

  return (
    <ProfileContextProvider profile={profile}>
      <DashboardSwitch tab={tab} />
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<DashboardPageProps> =
  async ({ req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const profile = await selectProfile({
        queryKey: selectProfileKey({ userId: user.id }),
      });

      if (!profile) return { notFound: true };

      return { props: { profile } };
    } catch (exception) {
      return { notFound: true };
    }
  };

export default DashboardPage;
