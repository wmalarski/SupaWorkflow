const paths = {
  newWorkflow: (organizationId: number, templateId: number): string =>
    `/organization/${organizationId}/template/${templateId}`,
  newTemplate: (organizationId: number): string =>
    `/organization/${organizationId}/template`,
  organization: (organizationId: number): string =>
    `/organization/${organizationId}`,
  organizations: "/organization",
  newOrganization: "/organization/new",
  template: (templateId: number): string => `/template/${templateId}`,
  templates: "/template",
  workflow: (workflowId: number): string => `/workflow/${workflowId}`,
  workflows: "/workflow",
  home: "/",
  signIn: "/signIn",
  signUp: "/signUp",
};

export default paths;
