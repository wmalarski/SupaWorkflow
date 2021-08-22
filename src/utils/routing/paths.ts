const paths = {
  team: (organizationId: number, teamId: number): string =>
    `/dashboard/${organizationId}/team/${teamId}`,
  teams: (organizationId: number): string =>
    `/dashboard/${organizationId}/team`,
  newTeam: (organizationId: number): string =>
    `/dashboard/${organizationId}/team/new`,
  template: (organizationId: number, templateId: number): string =>
    `/dashboard/${organizationId}/template/${templateId}`,
  newWorkflow: (organizationId: number, templateId: number): string =>
    `/dashboard/${organizationId}/template/${templateId}/new`,
  templates: (organizationId: number): string =>
    `/dashboard/${organizationId}/template`,
  newTemplate: (organizationId: number): string =>
    `/dashboard/${organizationId}/template/new`,
  workflow: (organizationId: number, workflowId: number): string =>
    `/dashboard/${organizationId}/workflow/${workflowId}`,
  workflows: (organizationId: number): string =>
    `/dashboard/${organizationId}/workflow`,
  organization: (organizationId: number): string =>
    `/dashboard/${organizationId}`,
  members: (organizationId: number): string =>
    `/dashboard/${organizationId}/members`,
  organizationSettings: (organizationId: number): string =>
    `/dashboard/${organizationId}/settings`,
  organizations: "/dashboard",
  newOrganization: "/dashboard/new",
  profile: "/dashboard/profile",
  home: "/",
  signIn: "/signIn",
  signUp: "/signUp",
};

export default paths;
