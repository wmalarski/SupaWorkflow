import { GetServerSideProps } from "next";
import { selectOrganizationMember } from "../../services/data/organizationMember/selectOrganization";
import {
  selectProfile,
  selectProfileKey,
} from "../../services/data/profile/selectProfile";
import { supabase } from "../../services/supabase";
import {
  Organization,
  OrganizationMember,
  Profile,
  Template,
  Workflow,
} from "../../services/types";
import {
  defaultTemplate,
  defaultWorkflow,
} from "../../services/utils/defaults";
import { validateParam } from "./params";

export type ProfileProtectedRouteProps = {
  profile: Profile;
};

export const profileProtectedRoute: GetServerSideProps<ProfileProtectedRouteProps> =
  async ({ req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const profile = await selectProfile({
      queryKey: selectProfileKey({ userId: user.id }),
    });

    if (!profile) return { notFound: true };

    return { props: { profile } };
  };

export type OrganizationProtectedRouteProps = ProfileProtectedRouteProps & {
  organization: Organization;
  member: OrganizationMember;
};

export const organizationProtectedRoute: GetServerSideProps<OrganizationProtectedRouteProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    const organizationId = validateParam(params?.organizationId, /\d+/);

    if (!organizationId) return { notFound: true };

    const props = await selectOrganizationMember({
      organizationId: Number(organizationId),
      userId: user.id,
    });

    return !props ? { notFound: true } : { props };
  };

export type TemplateProtectedRouteProps = OrganizationProtectedRouteProps & {
  template: Template;
};

export const templateProtectedRoute: GetServerSideProps<TemplateProtectedRouteProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, template
    const templateId = validateParam(params?.templateId, /\d+/);
    const organizationId = validateParam(params?.organizationId, /\d+/);

    if (!organizationId) return { notFound: true };

    const organizationMember = await selectOrganizationMember({
      organizationId: Number(organizationId),
      userId: user.id,
    });

    return organizationMember && templateId
      ? {
          props: {
            template: {
              ...defaultTemplate,
              id: Number(templateId),
            },
            ...organizationMember,
          },
        }
      : { notFound: true };
  };

export type WorkflowProtectedRouteProps = OrganizationProtectedRouteProps & {
  workflow: Workflow;
};

export const workflowProtectedRoute: GetServerSideProps<WorkflowProtectedRouteProps> =
  async ({ params, req }) => {
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (!user) return { notFound: true };

    // Needed: profile, organization, workflow
    const templateId = validateParam(params?.templateId, /\d+/);
    const organizationId = validateParam(params?.organizationId, /\d+/);

    if (!organizationId) return { notFound: true };

    const organizationMember = await selectOrganizationMember({
      organizationId: Number(organizationId),
      userId: user.id,
    });

    return organizationMember && templateId
      ? {
          props: {
            workflow: {
              ...defaultWorkflow,
              id: Number(templateId),
            },
            ...organizationMember,
          },
        }
      : { notFound: true };
  };
