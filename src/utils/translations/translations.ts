const translation = {
  // Navigation
  appName: "SupaWorkflow",
  navigationOrganizations: "Dashboard",

  // SideBar
  sideBarOrganization: "Organizations",
  sideBarNewOrganization: "New Organization",

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
