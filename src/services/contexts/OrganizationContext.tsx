import { PostgrestError } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useMemo } from "react";
import {
  SelectMemberResult,
  useSelectMember,
} from "../data/members/selectMember";
import {
  defaultOrganization,
  defaultOrganizationMember,
} from "../helpers/defaults";
import { Organization, OrganizationMember } from "../types";
import { ProfileContext } from "./ProfileContext";

export type OrganizationValue = {
  organization: Organization;
  member: OrganizationMember;
};

export type OrganizationContextValue = {
  value: OrganizationValue;
  isInitialized: boolean;
};

export const OrganizationContext = createContext<OrganizationContextValue>({
  value: {
    organization: defaultOrganization,
    member: defaultOrganizationMember,
  },
  isInitialized: false,
});

export const useOrganizationContext = (): Organization => {
  const context = useContext(OrganizationContext);
  if (!context.isInitialized) throw "Organization Context not initialized";
  return context.value.organization;
};

export const useOrganizationMemberContext = (): OrganizationMember => {
  const context = useContext(OrganizationContext);
  if (!context.isInitialized) throw "Organization Context not initialized";
  return context.value.member;
};

export type OrganizationContextProviderProps = {
  children: ReactNode;
  fallback?: ReactNode;
  organizationId: number;
  userId: string;
  enabled?: boolean;
  initialData?: SelectMemberResult;
  onError?: (err: PostgrestError) => void;
};

export const OrganizationContextProvider = ({
  children,
  fallback,
  organizationId,
  userId,
  enabled,
  initialData,
  onError,
}: OrganizationContextProviderProps): React.ReactElement | null => {
  const { data } = useSelectMember(
    { organizationId, userId },
    { initialData, enabled, onError }
  );

  const profileValue = useMemo(
    () => data && { profile: data.profile, isInitialized: true },
    [data]
  );

  const organizationValue = useMemo(
    () => data && { value: data, isInitialized: true },
    [data]
  );

  return profileValue && organizationValue ? (
    <ProfileContext.Provider value={profileValue}>
      <OrganizationContext.Provider value={organizationValue}>
        {children}
      </OrganizationContext.Provider>
    </ProfileContext.Provider>
  ) : (
    <>{fallback}</>
  );
};
