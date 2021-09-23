import {
  defaultOrganization,
  defaultOrganizationMember,
  defaultProfile,
  defaultTeam,
  defaultTemplate,
  defaultWorkflow,
  Organization,
  OrganizationMember,
  Profile,
  Team,
  Template,
  Workflow,
} from "@supa-workflow/services";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import OrganizationContext from "../../../services/src/contexts/OrganizationContext";
import ProfileContext from "../../../services/src/contexts/ProfileContext";
import TeamContext from "../../../services/src/contexts/TeamContext";
import TemplateContext from "../../../services/src/contexts/TemplateContext";
import WorkflowContext from "../../../services/src/contexts/WorkflowContext";

export type ContextsMockProps = {
  children: React.ReactNode;
  member?: Partial<OrganizationMember>;
  organization?: Partial<Organization>;
  template?: Partial<Template>;
  team?: Partial<Team>;
  workflow?: Partial<Workflow>;
  profile?: Partial<Profile>;
};

export const ContextsMock = ({
  children,
  member = defaultOrganizationMember,
  organization = defaultOrganization,
  template = defaultTemplate,
  team = defaultTeam,
  workflow = defaultWorkflow,
  profile = defaultProfile,
}: ContextsMockProps): React.ReactElement => (
  <QueryClientProvider client={new QueryClient()}>
    <OrganizationContext.Provider
      value={{
        isInitialized: true,
        value: {
          member: { ...defaultOrganizationMember, ...member },
          organization: { ...defaultOrganization, ...organization },
        },
      }}
    >
      <TemplateContext.Provider
        value={{
          isInitialized: true,
          template: { ...defaultTemplate, ...template },
        }}
      >
        <TeamContext.Provider
          value={{ isInitialized: true, team: { ...defaultTeam, ...team } }}
        >
          <WorkflowContext.Provider
            value={{
              isInitialized: true,
              workflow: { ...defaultWorkflow, ...workflow },
            }}
          >
            <ProfileContext.Provider
              value={{
                isInitialized: true,
                profile: { ...defaultProfile, ...profile },
              }}
            >
              {children}
            </ProfileContext.Provider>
          </WorkflowContext.Provider>
        </TeamContext.Provider>
      </TemplateContext.Provider>
    </OrganizationContext.Provider>
  </QueryClientProvider>
);
