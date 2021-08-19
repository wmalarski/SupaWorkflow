import { GetServerSideProps } from "next";
import React from "react";
import { WorkflowsList } from "../../molecules";
import { UserNavigation } from "../../organisms";
import { supabase } from "../../services/supabase";
import Page from "../../templates/Page/Page";

const WorkflowsPage = (): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <WorkflowsList />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { user } = await supabase.auth.api.getUserByCookie(req);
  if (!user) return { notFound: true };
  // Needed: profile
  return { props: {} };
};

export default WorkflowsPage;
