import { GetServerSideProps } from "next";
import {
  selectOrganizationMember,
  selectOrganizationMemberKey,
} from "../../services/data/organizationMember/selectOrganizationMember";
import {
  selectProfile,
  selectProfileKey,
} from "../../services/data/profile/selectProfile";
import {
  selectTemplate,
  selectTemplateKey,
} from "../../services/data/template/selectTemplate";
import {
  selectWorkflow,
  selectWorkflowKey,
} from "../../services/data/workflow/selectWorkflow";
import { supabase } from "../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
  Template,
  Workflow,
} from "../../services/types";
import { validateParam } from "./params";

export type ProfileProtectedRouteProps = {
  profile: Profile;
};

export const profileProtectedRoute: GetServerSideProps<ProfileProtectedRouteProps> =
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
      console.log("profileProtectedRoute", exception);
      return { notFound: true };
    }
  };

export type OrganizationProtectedRouteProps = ProfileProtectedRouteProps & {
  organization: Organization;
  member: OrganizationMember;
};

export const organizationProtectedRoute: GetServerSideProps<OrganizationProtectedRouteProps> =
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const organizationId = validateParam(params?.organizationId, /\d+/);

      if (!organizationId) return { notFound: true };

      const props = await selectOrganizationMember({
        queryKey: selectOrganizationMemberKey({
          organizationId: Number(organizationId),
          userId: user.id,
        }),
      });

      return !props ? { notFound: true } : { props };
    } catch (exception) {
      console.log("organizationProtectedRoute", exception);
      return { notFound: true };
    }
  };

export type TemplateProtectedRouteProps = OrganizationProtectedRouteProps & {
  template: Template;
};

export const templateProtectedRoute: GetServerSideProps<TemplateProtectedRouteProps> =
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const templateId = validateParam(params?.templateId, /\d+/);
      const organizationId = validateParam(params?.organizationId, /\d+/);

      if (!organizationId || !templateId) return { notFound: true };

      const [template, organizationMember] = await Promise.all([
        selectTemplate({
          queryKey: selectTemplateKey({ id: Number(templateId) }),
        }),
        selectOrganizationMember({
          queryKey: selectOrganizationMemberKey({
            organizationId: Number(organizationId),
            userId: user.id,
          }),
        }),
      ]);

      return organizationMember && template
        ? { props: { template, ...organizationMember } }
        : { notFound: true };
    } catch (exception) {
      console.log("templateProtectedRoute", exception);
      return { notFound: true };
    }
  };

export type WorkflowProtectedRouteProps = OrganizationProtectedRouteProps & {
  workflow: Workflow;
};

export const workflowProtectedRoute: GetServerSideProps<WorkflowProtectedRouteProps> =
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const workflowId = validateParam(params?.workflowId, /\d+/);
      const organizationId = validateParam(params?.organizationId, /\d+/);

      if (!workflowId || !organizationId) return { notFound: true };

      const [workflow, organizationMember] = await Promise.all([
        selectWorkflow({
          queryKey: selectWorkflowKey({ id: Number(workflowId) }),
        }),
        selectOrganizationMember({
          queryKey: selectOrganizationMemberKey({
            organizationId: Number(organizationId),
            userId: user.id,
          }),
        }),
      ]);

      return organizationMember && workflow
        ? { props: { workflow, ...organizationMember } }
        : { notFound: true };
    } catch (exception) {
      console.log("workflowProtectedRoute", exception);
      return { notFound: true };
    }
  };
