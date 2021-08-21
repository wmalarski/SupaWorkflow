import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectOrganizationMember } from "../../services/data/organizationMember/selectOrganizationMember";
import {
  Organization,
  OrganizationMember,
  Profile,
} from "../../services/types";
import {
  defaultOrganization,
  defaultOrganizationMember,
} from "../../services/utils/defaults";
import ProfileContext from "./ProfileContext";

export type OrganizationValue = {
  organization: Organization;
  member: OrganizationMember;
};

export type OrganizationContextValue = {
  value: OrganizationValue;
  isInitialized: boolean;
};

const OrganizationContext = createContext<OrganizationContextValue>({
  value: {
    organization: defaultOrganization,
    member: defaultOrganizationMember,
  },
  isInitialized: false,
});

export const useOrganizationContext = (): OrganizationValue => {
  const context = useContext(OrganizationContext);
  if (!context.isInitialized) throw "Organization Context not initialized";
  return context.value;
};

export type OrganizationContextProviderProps = {
  organization: Organization;
  member: OrganizationMember;
  profile: Profile;
  children: ReactNode;
};

export const OrganizationContextProvider = ({
  organization,
  member,
  profile,
  children,
}: OrganizationContextProviderProps): JSX.Element => {
  const { data } = useSelectOrganizationMember(
    { organizationId: organization.id, userId: profile.user_id },
    { initialData: { member, profile, organization } }
  );

  const profileValue = useMemo(
    () => ({ profile: data?.profile ?? profile, isInitialized: true }),
    [data, profile]
  );

  const organizationValue = useMemo(
    () => ({ value: data ?? { member, organization }, isInitialized: true }),
    [data, member, organization]
  );

  return (
    <ProfileContext.Provider value={profileValue}>
      <OrganizationContext.Provider value={organizationValue}>
        {children}
      </OrganizationContext.Provider>
    </ProfileContext.Provider>
  );
};

export default OrganizationContext;
