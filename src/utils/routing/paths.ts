import {
  DashboardTab,
  OrganizationTab,
  TemplateTab,
  WorkflowTab,
} from "./types";

const paths = {
  home: "/",
  signIn: "/signIn",
  signUp: "/signUp",
  dashboard: (tab?: DashboardTab | null) =>
    `/dashboard${tab ? `?tab=${tab}` : ""}`,
  organization: (orgId: number, tab?: OrganizationTab | null): string =>
    `/dashboard/${orgId}${tab ? `?tab=${tab}` : ""}`,
  team: (orgId: number, teamId: number): string =>
    `/dashboard/${orgId}/teams/${teamId}`,
  template: (
    orgId: number,
    templateId: number,
    tab?: TemplateTab | null
  ): string =>
    `/dashboard/${orgId}/template/${templateId}${tab ? `?tab=${tab}` : ""}`,
  workflow: (
    orgId: number,
    workflowId: number,
    tab?: WorkflowTab | null
  ): string =>
    `/dashboard/${orgId}/workflow/${workflowId}${tab ? `?tab=${tab}` : ""}`,
};

export default paths;
