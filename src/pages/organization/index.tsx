import type { GetServerSideProps, NextPage } from "next";
import React from "react";
import { OrganizationsList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { supabase } from "../../services/supabase";
import Page from "../../templates/Page/Page";

const OrganizationsPage: NextPage = () => {
  return (
    <Page header={<UserNavigation />}>
      <OrganizationsList />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };
  // Needed: profile
  return { props: {} };
};

export default OrganizationsPage;
