import { GetServerSideProps } from "next";
import React from "react";
import { OrganizationLayout } from "../../../../organisms";
import WorkflowSwitch from "../../../../organisms/WorkflowSwitch/WorkflowSwitch";
import {
  Organization,
  OrganizationMember,
  Profile,
  selectOrganizationMember,
  selectOrganizationMemberKey,
  selectWorkflow,
  selectWorkflowKey,
  supabase,
  Workflow,
} from "../../../../services";
import {
  OrganizationContextProvider,
  useTabParam,
  validateNumberParam,
  WorkflowContextProvider,
  WorkflowTab,
} from "../../../../utils";

export type WorkflowPageProps = {
  workflow: Workflow;
  profile: Profile;
  organization: Organization;
  member: OrganizationMember;
};

const WorkflowPage = ({
  member,
  profile,
  workflow,
  organization,
}: WorkflowPageProps): JSX.Element => {
  const tab = useTabParam(WorkflowTab);

  return (
    <OrganizationContextProvider
      member={member}
      profile={profile}
      organization={organization}
    >
      <WorkflowContextProvider workflow={workflow}>
        <OrganizationLayout>
          <WorkflowSwitch tab={tab} />
        </OrganizationLayout>
      </WorkflowContextProvider>
    </OrganizationContextProvider>
  );
};

export const workflowProtectedRoute: GetServerSideProps<WorkflowPageProps> =
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const workflowId = validateNumberParam(params?.workflowId);
      const orgId = validateNumberParam(params?.organizationId);

      if (!workflowId || !orgId) return { notFound: true };

      const [workflow, result] = await Promise.all([
        selectWorkflow({ queryKey: selectWorkflowKey({ id: workflowId }) }),
        selectOrganizationMember({
          queryKey: selectOrganizationMemberKey({
            organizationId: orgId,
            userId: user.id,
          }),
        }),
      ]);

      const { member, organization, profile } = result ?? {};

      return member && organization && profile && workflow
        ? { props: { workflow, member, organization, profile } }
        : { notFound: true };
    } catch (exception) {
      return { notFound: true };
    }
  };

export default WorkflowPage;
