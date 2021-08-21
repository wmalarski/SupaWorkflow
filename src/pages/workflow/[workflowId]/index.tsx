import { GetServerSideProps } from "next";
import React from "react";
import { WorkflowEditor } from "../../../molecules";
import { UserNavigation } from "../../../organisms";
import { supabase } from "../../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
  Workflow,
} from "../../../services/types";
import {
  defaultOrganization,
  defaultOrganizationMember,
  defaultProfile,
  defaultWorkflow,
} from "../../../services/utils/defaults";
import Page from "../../../templates/Page/Page";
import { OrganizationContextProvider } from "../../../utils/organization/OrganizationContext";
import { ProfileContextProvider } from "../../../utils/profile/ProfileContext";
import { validateParam } from "../../../utils/routing/params";
import { WorkflowContextProvider } from "../../../utils/workflow/WorkflowContext";

export type WorkflowPageProps = {
  workflow: Workflow;
  organization: Organization;
  profile: Profile;
  member: OrganizationMember;
};

const WorkflowPage = ({
  workflow,
  organization,
  profile,
  member,
}: WorkflowPageProps): JSX.Element => {
  return (
    <ProfileContextProvider profile={profile}>
      <OrganizationContextProvider organization={organization} member={member}>
        <WorkflowContextProvider workflow={workflow}>
          <Page header={<UserNavigation />}>
            <WorkflowEditor />
          </Page>
        </WorkflowContextProvider>
      </OrganizationContextProvider>
    </ProfileContextProvider>
  );
};

export const getServerSideProps: GetServerSideProps<WorkflowPageProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, workflow
    const workflowId = validateParam(params?.workflowId, /\d+/);

    return workflowId
      ? {
          props: {
            workflow: { ...defaultWorkflow, id: Number(workflowId) },
            organization: defaultOrganization,
            profile: defaultProfile,
            member: defaultOrganizationMember,
          },
        }
      : { notFound: true };
  };

export default WorkflowPage;
