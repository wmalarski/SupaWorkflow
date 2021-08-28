import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  defaultOrganization,
  defaultOrganizationMember,
  defaultTeam,
  defaultTemplate,
  defaultWorkflow,
  Organization,
  OrganizationMember,
  Team,
  Template,
  Workflow,
} from "../services";
import OrganizationContext from "../utils/contexts/OrganizationContext";
import TeamContext from "../utils/contexts/TeamContext";
import TemplateContext from "../utils/contexts/TemplateContext";
import WorkflowContext from "../utils/contexts/WorkflowContext";

export type ContextsMockProps = {
  children: React.ReactNode;
  member?: OrganizationMember;
  organization?: Organization;
  template?: Template;
  team?: Team;
  workflow?: Workflow;
};

export const ContextsMock = ({
  children,
  member = defaultOrganizationMember,
  organization = defaultOrganization,
  template = defaultTemplate,
  team = defaultTeam,
  workflow = defaultWorkflow,
}: ContextsMockProps): JSX.Element => (
  <QueryClientProvider client={new QueryClient()}>
    <OrganizationContext.Provider
      value={{ isInitialized: true, value: { member, organization } }}
    >
      <TemplateContext.Provider value={{ isInitialized: true, template }}>
        <TeamContext.Provider value={{ isInitialized: true, team }}>
          <WorkflowContext.Provider value={{ isInitialized: true, workflow }}>
            {children}
          </WorkflowContext.Provider>
        </TeamContext.Provider>
      </TemplateContext.Provider>
    </OrganizationContext.Provider>
  </QueryClientProvider>
);
