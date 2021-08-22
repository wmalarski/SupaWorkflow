import { GetServerSideProps } from "next";
import {
  Organization,
  OrganizationMember,
  OrganizationRole,
  Profile,
  selectOrganizationMember,
  selectOrganizationMemberKey,
  selectProfile,
  selectProfileKey,
  selectTemplate,
  selectTemplateKey,
  selectWorkflow,
  selectWorkflowKey,
  supabase,
  Template,
  Workflow,
} from "../../services";
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

export const organizationProtectedRoute: (
  role?: OrganizationRole[]
) => GetServerSideProps<OrganizationProtectedRouteProps> =
  (roles) =>
  async ({ params, req }) => {
    try {
      const { user } = await supabase.auth.api.getUserByCookie(req);
      if (!user) return { notFound: true };

      const organizationId = validateParam(params?.organizationId, /\d+/);

      if (!organizationId) return { notFound: true };

      const organizationMember = await selectOrganizationMember({
        queryKey: selectOrganizationMemberKey({
          roles,
          organizationId: Number(organizationId),
          userId: user.id,
        }),
      });

      const { member, organization, profile } = organizationMember ?? {};

      return member && organization && profile
        ? { props: { member, organization, profile } }
        : { notFound: true };
    } catch (exception) {
      console.log("organizationProtectedRoute", exception);
      return { notFound: true };
    }
  };

export type TemplateProtectedRouteProps = OrganizationProtectedRouteProps & {
  template: Template;
};

export const templateProtectedRoute: (
  roles?: OrganizationRole[]
) => GetServerSideProps<TemplateProtectedRouteProps> =
  (roles) =>
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
            roles,
            organizationId: Number(organizationId),
            userId: user.id,
          }),
        }),
      ]);

      const { member, organization, profile } = organizationMember ?? {};

      return member && organization && profile && template
        ? { props: { template, member, organization, profile } }
        : { notFound: true };
    } catch (exception) {
      console.log("templateProtectedRoute", exception);
      return { notFound: true };
    }
  };

export type WorkflowProtectedRouteProps = OrganizationProtectedRouteProps & {
  workflow: Workflow;
};

export const workflowProtectedRoute: (
  roles?: OrganizationRole[]
) => GetServerSideProps<WorkflowProtectedRouteProps> =
  (roles) =>
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
            roles,
            organizationId: Number(organizationId),
            userId: user.id,
          }),
        }),
      ]);

      const { member, organization, profile } = organizationMember ?? {};

      return member && organization && profile && workflow
        ? { props: { workflow, member, organization, profile } }
        : { notFound: true };
    } catch (exception) {
      console.log("workflowProtectedRoute", exception);
      return { notFound: true };
    }
  };
