import { createContext, ReactNode, useContext, useMemo } from "react";
import { Organization, OrganizationMember } from "../../services/types";
import {
  defaultOrganization,
  defaultOrganizationMember,
} from "../../services/utils/defaults";

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
  if (context.isInitialized) throw "Organization Context not initialized";
  return context.value;
};

export type OrganizationContextProviderProps = {
  organization: Organization;
  member: OrganizationMember;
  children: ReactNode;
};

export const OrganizationContextProvider = ({
  organization,
  member,
  children,
}: OrganizationContextProviderProps): JSX.Element => (
  <OrganizationContext.Provider
    value={useMemo(
      () => ({
        value: {
          organization,
          member,
        },
        isInitialized: true,
      }),
      [organization, member]
    )}
  >
    {children}
  </OrganizationContext.Provider>
);

export default OrganizationContext;
