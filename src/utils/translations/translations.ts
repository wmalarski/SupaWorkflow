const translation = {
  fieldIsRequired: "Field is required",
  errorMinLength: (min: number): string => `Min ${min}`,
  signInHeader: "Sign In",
  signInButton: "Sign In",
  emailPlaceholder: "Email",
  passwordPlaceholder: "Password",
  confirmPasswordPlaceholder: "Confirm Password",
  fieldIsDifferent: "Repeat password",
  errorMaxLength: (max: number): string => `Max ${max}`,
  signOutButton: "Sign Out",
  signUpHeader: "Sign Up",
  signUpButton: "Sign Up",
};

export type Translation = typeof translation;

export type Language = "default";

const translations: Record<Language, Translation> = {
  default: translation,
};

export default translations;
