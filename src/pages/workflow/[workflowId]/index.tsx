import { GetServerSideProps } from "next";
import React from "react";
import { Debug } from "../../../atoms";
import { WorkflowEditor } from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import Page from "../../../templates/Page/Page";
import { validateParam } from "../../../utils/routing/params";

export type WorkflowPageProps = {
  workflowId: number;
};

const WorkflowPage = ({ workflowId }: WorkflowPageProps): JSX.Element => {
  return (
    <Page header={<UserNavigation />}>
      <Debug value={{ workflowId }} />
      <WorkflowEditor />
    </Page>
  );
};

export const getServerSideProps: GetServerSideProps<WorkflowPageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, workflow
    const workflowId = validateParam(params?.workflowId, /\d+/);

    return workflowId
      ? { props: { workflowId: Number(workflowId) } }
      : { notFound: true };
  };

export default WorkflowPage;
