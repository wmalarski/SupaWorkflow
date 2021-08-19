import { GetServerSideProps } from "next";
import React from "react";
import { Debug } from "../../atoms";
import { WorkflowsList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { selectProfile } from "../../services/data/profile/selectProfile";
import { supabase } from "../../services/supabase";
import { Profile } from "../../services/types";
import Page from "../../templates/Page/Page";
import { ProfileContextProvider } from "../../utils/profile/ProfileContext";

export type WorkflowsPageProps = {
  profile: Profile;
};

const WorkflowsPage = ({ profile }: WorkflowsPageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <Page header={<UserNavigation />}>
        <Debug value={profile} />
        <WorkflowsList />
      </Page>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  try {
    const profile = await selectProfile({ userId: user.id });

    if (!profile) return { notFound: true };
    return { props: { profile } };
  } catch (exception) {
    console.error(JSON.stringify(exception));
    return { notFound: true };
  }
};

export default WorkflowsPage;
