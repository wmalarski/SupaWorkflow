import { UrlObject } from "url";
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

  dashboard: (query: { tab?: DashboardTab | null } = {}): UrlObject => ({
    pathname: "/dashboard",
    query,
  }),

  organization: (query: {
    organizationId: number;
    tab?: OrganizationTab | null;
  }): UrlObject => ({
    pathname: "/dashboard/[organizationId]",
    query,
  }),

  team: (query: { organizationId: number; teamId: number }): UrlObject => ({
    pathname: "/dashboard/[organizationId]/teams/[teamId]",
    query,
  }),

  template: (query: {
    organizationId: number;
    templateId: number;
    tab?: TemplateTab | null;
  }): UrlObject => ({
    pathname: "/dashboard/[organizationId]/template/[templateId]",
    query,
  }),

  workflow: (query: {
    organizationId: number;
    workflowId: number;
    tab?: WorkflowTab | null;
  }): UrlObject => ({
    pathname: "/dashboard/[organizationId]/workflow/[workflowId]",
    query,
  }),
};

export default paths;
