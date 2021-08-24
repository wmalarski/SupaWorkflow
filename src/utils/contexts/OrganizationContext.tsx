import { useRouter } from "next/router";
import React, { createContext, ReactNode, useContext, useEffect } from "react";
import {
  defaultOrganization,
  defaultOrganizationMember,
  Organization,
  OrganizationMember,
  OrganizationRole,
  useSelectOrganizationMember,
} from "../../services";
import { validateNumberParam } from "../routing/params";
import ProfileContext from "./ProfileContext";
import { useUserContext } from "./UserContext";

export type OrganizationContextValue = {
  organization: Organization;
  member: OrganizationMember;
};

const OrganizationContext = createContext<OrganizationContextValue>({
  organization: defaultOrganization,
  member: defaultOrganizationMember,
});

export const useOrganizationContext = (): OrganizationContextValue =>
  useContext(OrganizationContext);

export type OrganizationContextProviderProps = {
  userId: string;
  organizationId: number;
  children: ReactNode;
  fallback?: ReactNode;
};

export const OrganizationContextProvider = ({
  userId,
  organizationId,
  children,
  fallback,
}: OrganizationContextProviderProps): JSX.Element => {
  const { data } = useSelectOrganizationMember(
    { organizationId, userId: userId ?? "" },
    { enabled: !!userId }
  );

  return data ? (
    <ProfileContext.Provider value={data.profile}>
      <OrganizationContext.Provider
        value={{ member: data.member, organization: data.organization }}
      >
        {children}
      </OrganizationContext.Provider>
    </ProfileContext.Provider>
  ) : (
    <>{fallback}</>
  );
};

export type OrganizationRoleGuardProps = {
  roles: OrganizationRole[];
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export const OrganizationRoleGuard = ({
  children,
  roles,
  fallback,
}: OrganizationRoleGuardProps): JSX.Element | null => {
  const { member } = useOrganizationContext();

  return <>{roles.includes(member.role) ? children : fallback}</>;
};

export type RouteOrganizationContextProviderProps = {
  children: React.ReactNode;
  fallback?: React.ReactNode;
};

export const RouteOrganizationContextProvider = ({
  children,
  fallback,
}: RouteOrganizationContextProviderProps): JSX.Element | null => {
  const router = useRouter();
  const { user, isInitialized } = useUserContext();

  const organizationId = validateNumberParam(router.query.organizationId);

  useEffect(() => {
    if (!isInitialized || !router.isReady || (!!organizationId && user)) return;
    router.push("/404");
  }, [isInitialized, organizationId, user, router]);

  if (!organizationId || !user?.id) return <>{fallback}</>;

  return (
    <OrganizationContextProvider
      organizationId={organizationId}
      userId={user?.id}
    >
      {children}
    </OrganizationContextProvider>
  );
};

export default OrganizationContext;
