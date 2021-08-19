import { GetServerSideProps } from "next";
import React from "react";
import { TemplatesList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { supabase } from "../../services/supabase";
import Page from "../../templates/Page/Page";

const TemplatesPage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <TemplatesList />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };
  // Needed: profile
  return { props: {} };
};

export default TemplatesPage;
