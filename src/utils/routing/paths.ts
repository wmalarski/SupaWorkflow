import {
  DashboardTab,
  OrganizationTab,
  TeamTab,
  TemplateTab,
  WorkflowTab,
} from "./types";

const paths = {
  home: "/",
  signIn: "/signIn",
  signUp: "/signUp",
  dashboard: (tab: DashboardTab) => `/dashboard?tab=${tab}`,
  organization: (orgId: number, tab: OrganizationTab): string =>
    `/dashboard/${orgId}?tab=${tab}`,
  team: (orgId: number, teamId: number, tab: TeamTab): string =>
    `/dashboard/${orgId}/teams/${teamId}?tab=${tab}`,
  template: (orgId: number, templateId: number, tab: TemplateTab): string =>
    `/dashboard/${orgId}/template/${templateId}?tab=${tab}`,
  workflow: (orgId: number, workflowId: number, tab: WorkflowTab): string =>
    `/dashboard/${orgId}/workflow/${workflowId}?tab=${tab}`,
};

export default paths;
