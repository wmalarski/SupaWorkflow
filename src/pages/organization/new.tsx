import type { GetServerSideProps } from "next";
import React from "react";
import {
  CreateOrganization,
  DashboardCorner,
  DashboardSideBar,
} from "../../molecules";
import { UserNavigation } from "../../organisms";
import {
  selectProfile,
  selectProfileKey,
} from "../../services/data/profile/selectProfile";
import { supabase } from "../../services/supabase";
import { Profile } from "../../services/types";
import GridTemplate from "../../templates/GridPage/GridPage";
import { ProfileContextProvider } from "../../utils/profile/ProfileContext";

export type NewOrganizationPageProps = {
  profile: Profile;
};

const NewOrganizationPage = ({
  profile,
}: NewOrganizationPageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <GridTemplate
        corner={<DashboardCorner />}
        header={<UserNavigation />}
        sideBar={<DashboardSideBar />}
      >
        <CreateOrganization />
      </GridTemplate>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };

  try {
    const profile = await selectProfile({
      queryKey: selectProfileKey({ userId: user.id }),
    });

    if (!profile) return { notFound: true };

    return { props: { profile } };
  } catch (exception) {
    console.log(JSON.stringify(exception));
    return { notFound: true };
  }
};

export default NewOrganizationPage;
