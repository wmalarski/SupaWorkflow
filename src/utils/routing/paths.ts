import {
  DashboardTab,
  OrganizationTab,
  TemplateTab,
  WorkflowTab,
} from "./types";

const paths = {
  home: "/",

  notFound: "/404",

  signIn: "/signIn",

  signUp: "/signUp",

  dashboard: (options: { tab?: DashboardTab | null } = {}): string =>
    `/dashboard${options.tab ? `?tab=${options.tab}` : ""}`,

  organization: (options: {
    organizationId: number;
    tab?: OrganizationTab | null;
  }): string =>
    `/dashboard/${options.organizationId}${
      options.tab ? `?tab=${options.tab}` : ""
    }`,

  team: (options: { organizationId: number; teamId: number }): string =>
    `/dashboard/${options.organizationId}/teams/${options.teamId}`,

  template: (options: {
    organizationId: number;
    templateId: number;
    tab?: TemplateTab | null;
  }): string =>
    `/dashboard/${options.organizationId}/template/${options.templateId}${
      options.tab ? `?tab=${options.tab}` : ""
    }`,

  workflow: (options: {
    organizationId: number;
    workflowId: number;
    tab?: WorkflowTab | null;
  }): string =>
    `/dashboard/${options.organizationId}/workflow/${options.workflowId}${
      options.tab ? `?tab=${options.tab}` : ""
    }`,
};

export default paths;
