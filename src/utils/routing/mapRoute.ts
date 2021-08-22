import { UseTextFnc } from "../translations/useText";
import paths from "./paths";

export type MapRouteArgs = {
  route: string;
  path: string;
  text: UseTextFnc;
};

export type MapRouteReturn = {
  href: string;
  children: string;
};

const mapRoute = ({
  path,
  route,
  text,
}: MapRouteArgs): MapRouteReturn | null => {
  const nodes = path.split("/");

  switch (route) {
    case "/dashboard/[organizationId]/team/[teamId]":
      return {
        href: paths.team(Number(nodes[2]), Number(nodes[4])),
        children: text("navigationTeam"),
      };
    case "/dashboard/[organizationId]/team":
      return {
        href: paths.teams(Number(nodes[2])),
        children: text("navigationTeams"),
      };
    case "/dashboard/[organizationId]/team/new":
      return {
        href: paths.newTeam(Number(nodes[2])),
        children: text("navigationNewTeam"),
      };
    case "/dashboard/[organizationId]/template/[templateId]":
      return {
        href: paths.template(Number(nodes[2]), Number(nodes[4])),
        children: text("navigationTemplate"),
      };
    case "/dashboard/[organizationId]/template/[templateId]/new":
      return {
        href: paths.newWorkflow(Number(nodes[2]), Number(nodes[4])),
        children: text("navigationNewWorkflow"),
      };
    case "/dashboard/[organizationId]/template":
      return {
        href: paths.templates(Number(nodes[2])),
        children: text("navigationTemplates"),
      };
    case "/dashboard/[organizationId]/template/new":
      return {
        href: paths.newTemplate(Number(nodes[2])),
        children: text("navigationNewTemplate"),
      };
    case "/dashboard/[organizationId]/workflow/[workflowId]":
      return {
        href: paths.workflow(Number(nodes[2]), Number(nodes[4])),
        children: text("navigationWorkflow"),
      };
    case "/dashboard/[organizationId]/workflow":
      return {
        href: paths.workflows(Number(nodes[2])),
        children: text("navigationWorkflow"),
      };
    case "/dashboard/[organizationId]":
      return {
        href: paths.organization(Number(nodes[2])),
        children: text("navigationOrganization"),
      };
    case "/dashboard/[organizationId]/members":
      return {
        href: paths.members(Number(nodes[2])),
        children: text("navigationMembers"),
      };
    case "/dashboard/[organizationId]/settings":
      return {
        href: paths.organizationSettings(Number(nodes[2])),
        children: text("navigationSettings"),
      };
    case "/dashboard":
      return {
        href: paths.organizations,
        children: text("navigationDashboard"),
      };
    case "/dashboard/new":
      return {
        href: paths.newOrganization,
        children: text("navigationNewOrganization"),
      };
    case "/dashboard/profile":
      return {
        href: paths.profile,
        children: text("navigationProfile"),
      };
    case "":
      return {
        href: paths.home,
        children: text("navigationHome"),
      };
    default:
      return null;
  }
};

export default mapRoute;
