const paths = {
  template: (organizationId: number, templateId: number): string =>
    `/organization/${organizationId}/template/${templateId}`,
  newWorkflow: (organizationId: number, templateId: number): string =>
    `/organization/${organizationId}/template/${templateId}/new`,
  templates: (organizationId: number): string =>
    `/organization/${organizationId}/template`,
  newTemplate: (organizationId: number): string =>
    `/organization/${organizationId}/template/new`,
  workflow: (organizationId: number, workflowId: number): string =>
    `/organization/${organizationId}/workflow/${workflowId}`,
  workflows: (organizationId: number): string =>
    `/organization/${organizationId}/workflow`,
  organization: (organizationId: number): string =>
    `/organization/${organizationId}`,
  organizationMembers: (organizationId: number): string =>
    `/organization/${organizationId}/members`,
  organizations: "/organization",
  newOrganization: "/organization/new",
  home: "/",
  signIn: "/signIn",
  signUp: "/signUp",
};

export default paths;
