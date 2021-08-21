const translation = {
  // Navigation
  appName: "SupaWorkflow",
  navigationOrganizations: "Dashboard",

  // SideBar
  sideBarOrganization: "Organization",
  sideBarOrganizations: "Organizations",
  sideBarMembers: "Members",
  sideBarSettings: "Settings",
  sideBarNewOrganization: "New Organization",
  sideBarTemplates: "Templates",
  sideBarNewTemplate: "New Template",

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

  // Add template
  addTemplateHeader: "Add new template",
  addTemplateName: "Name",
  addTemplateDescription: "Description",
  addTemplateSubmit: "Save",

  // Template editor
  version: "Version",
  deleteMessage: "Delete",
  addMessage: "Add",
  updateMessage: "Update",
  editMessage: "Edit",

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
