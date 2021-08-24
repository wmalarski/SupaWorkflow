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
  supabase,
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
