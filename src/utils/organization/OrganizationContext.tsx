import { createContext, ReactNode, useContext, useMemo } from "react";
import { Organization, TeamMemberPair } from "../../services/types";
import {
  defaultOrganization,
  defaultTeam,
  defaultTeamMember,
} from "../../services/utils/defaults";

export type OrganizationValue = {
  organization: Organization;
  teams: TeamMemberPair[];
};

export type OrganizationContextValue = {
  value: OrganizationValue;
  isInitialized: boolean;
};

const OrganizationContext = createContext<OrganizationContextValue>({
  value: {
    organization: defaultOrganization,
    teams: [{ member: defaultTeamMember, team: defaultTeam }],
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
  teams: TeamMemberPair[];
  children: ReactNode;
};

export const OrganizationContextProvider = ({
  organization,
  teams,
  children,
}: OrganizationContextProviderProps): JSX.Element => (
  <OrganizationContext.Provider
    value={useMemo(
      () => ({
        value: {
          organization,
          teams,
        },
        isInitialized: true,
      }),
      [organization, teams]
    )}
  >
    {children}
  </OrganizationContext.Provider>
);

export default OrganizationContext;
