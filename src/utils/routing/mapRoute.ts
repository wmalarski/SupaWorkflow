import { ParsedUrlQuery } from "querystring";
import { UseTextFnc } from "../translations/useText";
import { validateNumberParam, validateParam } from "./params";
import paths from "./paths";
import {
  DashboardTab,
  OrganizationTab,
  TemplateTab,
  WorkflowTab,
} from "./types";

export type MapRouteArgs = {
  route: string;
  query: ParsedUrlQuery;
  text: UseTextFnc;
};

export type MapRouteReturn = {
  href: string;
  children: string;
};

const mapText = {
  home: (text: UseTextFnc): MapRouteReturn => ({
    href: paths.home,
    children: text("navigationHome"),
  }),
  dashboard: (tab: DashboardTab | null, text: UseTextFnc): MapRouteReturn => {
    const href = paths.dashboard(tab);

    switch (tab) {
      case DashboardTab.new:
        return { href, children: text("navigationNewOrganization") };
      case DashboardTab.profile:
        return { href, children: text("navigationProfile") };
      default:
        return { href, children: text("navigationDashboard") };
    }
  },
  organization: (
    orgId: number,
    tab: OrganizationTab | null,
    text: UseTextFnc
  ): MapRouteReturn => {
    const href = paths.organization(orgId, tab);

    switch (tab) {
      case OrganizationTab.members:
        return { href, children: text("navigationMembers") };
      case OrganizationTab.newTeam:
        return { href, children: text("navigationNewTeam") };
      case OrganizationTab.newTemplate:
        return { href, children: text("navigationNewTemplate") };
      case OrganizationTab.settings:
        return { href, children: text("navigationSettings") };
      case OrganizationTab.teams:
        return { href, children: text("navigationTeams") };
      case OrganizationTab.templates:
        return { href, children: text("navigationTemplates") };
      case OrganizationTab.workflows:
        return { href, children: text("navigationWorkflows") };
      default:
        return { href, children: text("navigationDashboard") };
    }
  },
  team: (orgId: number, teamId: number, text: UseTextFnc): MapRouteReturn => ({
    href: paths.team(orgId, teamId, null),
    children: text("navigationTeam"),
  }),
  template: (
    orgId: number,
    templateId: number,
    tab: TemplateTab | null,
    text: UseTextFnc
  ): MapRouteReturn => {
    const href = paths.template(orgId, templateId, tab);

    switch (tab) {
      case TemplateTab.new:
        return { href, children: text("navigationNewWorkflow") };
      case TemplateTab.edit:
      default:
        return { href, children: text("navigationTemplate") };
    }
  },
  workflow: (
    orgId: number,
    workflowId: number,
    tab: WorkflowTab | null,
    text: UseTextFnc
  ): MapRouteReturn => {
    const href = paths.workflow(orgId, workflowId, tab);

    switch (tab) {
      case WorkflowTab.edit:
      default:
        return { href, children: text("navigationWorkflow") };
    }
  },
};

const mapRoute = (args: MapRouteArgs): MapRouteReturn[] => {
  const { route, query, text } = args;

  switch (route) {
    case "":
      return [mapText.home(text)];
    case "/dashboard": {
      return [
        mapText.home(text),
        mapText.dashboard(null, text),
        ...(query.tab
          ? [
              mapText.dashboard(
                validateParam(query.tab) as DashboardTab | null,
                text
              ),
            ]
          : []),
      ];
    }
    case "/dashboard/[organizationId]": {
      const orgId = validateNumberParam(query.organizationId);

      if (!orgId) return [];

      return [
        mapText.home(text),
        mapText.dashboard(null, text),
        mapText.organization(
          orgId,
          validateParam(query.tab) as OrganizationTab | null,
          text
        ),
      ];
    }
    case "/dashboard/[organizationId]/teams/[teamId]": {
      const orgId = validateNumberParam(query.organizationId);
      const teamId = validateNumberParam(query.teamId);

      if (!orgId || !teamId) return [];

      return [
        mapText.home(text),
        mapText.dashboard(null, text),
        mapText.organization(orgId, null, text),
        mapText.team(orgId, teamId, text),
      ];
    }
    case "/dashboard/[organizationId]/template/[templateId]": {
      const orgId = validateNumberParam(query.organizationId);
      const templateId = validateNumberParam(query.templateId);
      if (!orgId || !templateId) return [];

      return [
        mapText.home(text),
        mapText.dashboard(null, text),
        mapText.organization(orgId, null, text),
        mapText.template(
          orgId,
          templateId,
          validateParam(query.tab) as TemplateTab | null,
          text
        ),
      ];
    }
    case "/dashboard/[organizationId]/workflow/[workflowId]": {
      const orgId = validateNumberParam(query.organizationId);
      const workflowId = validateNumberParam(query.workflowId);
      if (!orgId || !workflowId) return [];

      return [
        mapText.home(text),
        mapText.dashboard(null, text),
        mapText.organization(orgId, null, text),
        mapText.workflow(
          orgId,
          workflowId,
          validateParam(query.tab) as WorkflowTab | null,
          text
        ),
      ];
    }
    default:
      return [];
  }
};

export default mapRoute;
