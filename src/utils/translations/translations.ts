const translation = {
  // Navigation
  appName: "SupaWorkflow",
  nextPage: "Next Page",
  previousPage: "Previous Page",

  navigationHome: "Home",
  navigationDashboard: "Dashboard",

  navigationOrganizations: "Dashboard",
  navigationOrganizationsAll: "All Organizations",
  navigationOrganization: "Organization",
  navigationOrganizationDashboard: "Dashboard",
  navigationOrganizationNew: "New Organization",

  navigationTemplate: "Template",
  navigationTemplates: "Templates",
  navigationTemplatesAll: "All Templates",
  navigationTemplateDetails: "Details",
  navigationTemplateEdit: "Edit",
  navigationTemplateNew: "New Template",

  navigationWorkflow: "Workflow",
  navigationWorkflows: "Workflows",
  navigationWorkflowDetails: "Details",
  navigationWorkflowEdit: "Edit",
  navigationNewWorkflow: "New Workflow",

  navigationTeam: "Team",
  navigationTeams: "Teams",
  navigationTeamNew: "New Team",
  navigationTeamsAll: "All Teams",
  navigationTeamDetails: "Details",

  navigationMembers: "Members",
  navigationSettings: "Settings",

  navigationProfile: "Profile",
  navigationProfileSettings: "Settings",

  // Auth
  signInHeader: "Sign In",
  signInButton: "Sign In",
  signOutButton: "Sign Out",
  signUpHeader: "Sign Up",
  signUpButton: "Sign Up",
  emailPlaceholder: "Email",
  passwordPlaceholder: "Password",
  confirmPasswordPlaceholder: "Confirm Password",
  fieldIsDifferent: "Repeat password",

  // Profile Settings
  profileSettingsHeader: "Edit Profile",
  profileSettingsName: "Name",
  profileSettingsSave: "Save",

  // Organization dashboard
  organizationsDashboardHeader: "Organizations",

  // Add organization
  addOrganizationHeader: "Add new organization",
  addOrganizationName: "Name",
  addOrganizationDescription: "Description",
  addOrganizationSubmit: "Save",

  // Organization settings
  updateOrganizationHeader: "Update Organization",
  updateOrganizationName: "Name",
  updateOrganizationDescription: "Description",
  updateOrganizationSubmit: "Save",
  updateOrganizationSuccess: "Organization updated",
  deleteOrganizationDescription: "Delete Organization",
  deleteOrganizationSubmit: "Delete",

  // Organization members
  organizationMemberHeaderIndex: "Id",
  organizationMemberHeaderName: "Name",
  organizationMemberHeaderRole: "Role",
  organizationMemberHeaderDelete: "Remove",
  organizationMemberOwner: "Owner",
  organizationMemberMod: "Mod",
  organizationMemberUser: "User",
  organizationMemberGuest: "Guest",
  deleteOrganizationMember: "Remove",

  // Team List
  teamsDelete: "Remove",

  // Add Organization member
  addOrganizationMemberHeader: "Add Member",
  addOrganizationMemberButton: "Invite",
  addOrganizationMemberRole: "Role",

  // Add template
  addTemplateHeader: "Add new template",
  addTemplateName: "Name",
  addTemplateDescription: "Description",
  addTemplateSubmit: "Save",

  // Template editor
  version: "Version",
  checklistTemplateNode: "Check List",
  formTemplateNode: "Form",
  decisionTemplateNode: "Decision",
  deleteTemplateNodeOption: "Delete",
  addTemplateNodeOption: "Add",
  upTemplateNodeOption: "Add",
  downTemplateNodeOption: "Add",
  saveTemplateNode: "Save",
  editMessage: "Edit",

  // Add team
  addTeamHeader: "Add new team",
  addTeamName: "Name",
  addTeamDescription: "Description",
  addTeamColor: "Color",
  addTeamSubmit: "Save",

  // Add team member
  addTeamMemberLabel: "Member",
  addTeamMemberButton: "Add",

  // Add workflow
  addWorkflowHeader: "Add new workflow",
  addWorkflowName: "Name",
  addWorkflowDescription: "Description",
  addWorkflowSubmit: "Save",

  // Field Errors
  fieldIsRequired: "Field is required",
  errorMinLength: (min: number): string => `Min ${min}`,
  errorMaxLength: (max: number): string => `Max ${max}`,
};

export type Translation = typeof translation;

export type Language = "default";

const translations: Record<Language, Translation> = {
  default: translation,
};

export default translations;
