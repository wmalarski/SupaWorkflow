import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { CreateOrganization } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { supabase } from "../../services/supabase";
import Page from "../../templates/Page/Page";

const NewOrganizationPage: NextPage = () => {
  return (
    <Page header={<UserNavigation />}>
      <CreateOrganization />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };
  // Needed: profile
  return { props: {} };
};

export default NewOrganizationPage;
