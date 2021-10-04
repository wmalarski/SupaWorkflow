import { useRouter } from "next/router";
import * as Types from "./types";

export const paramsMapping = {
  dashboardTab: { key: "tab", values: Types.DashboardTab },
  dashboardDialog: { key: "dialog", values: Types.DashboardDialog },
  organizationTab: { key: "tab", values: Types.OrganizationTab },
  organizationDialog: { key: "dialog", values: Types.OrganizationDialog },
  workflowTab: { key: "tab", values: Types.WorkflowTab },
  templateTab: { key: "tab", values: Types.TemplateTab },
  templateDialog: { key: "dialog", values: Types.TemplateDialog },
};

export type ParamsMapping = {
  dashboardTab: Types.DashboardTab;
  dashboardDialog: Types.DashboardDialog;
  organizationTab: Types.OrganizationTab;
  organizationDialog: Types.OrganizationDialog;
  workflowTab: Types.WorkflowTab;
  templateTab: Types.TemplateTab;
  templateDialog: Types.TemplateDialog;
};

export const validateParam = (
  param?: string | string[],
  regex?: string | RegExp
): string | null => {
  if (!param || Array.isArray(param)) return null;

  if (!regex) return param;

  const result = param.match(regex);
  return result ? param : null;
};

export const validateNumberParam = (
  param?: string | string[]
): number | null => {
  const result = validateParam(param, /\d+/);

  return result ? Number(result) : null;
};

export const useTabParam = <
  T extends Record<string, string>,
  K extends keyof T
>(
  tabs: T
): T[K] | null => {
  const router = useRouter();

  const tabParam = validateParam(router.query?.tab);

  if (!tabParam) return null;

  return tabParam in tabs ? (tabs[tabParam] as T[K]) : null;
};

export const useDialogParam = <
  T extends Record<string, string>,
  K extends keyof T
>(
  tabs: T
): T[K] | null => {
  const router = useRouter();

  const dialogParam = validateParam(router.query?.dialog);

  if (!dialogParam) return null;

  return dialogParam in tabs ? (tabs[dialogParam] as T[K]) : null;
};

export const useNumberParam = (param: string): number | null => {
  const router = useRouter();

  const value = validateNumberParam(router.query?.[param]);

  if (!value && value !== 0) return null;

  return value;
};

export const getUrlSearchParams = (
  init: Record<string, string | null>
): URLSearchParams =>
  new URLSearchParams(
    Object.entries(init).reduce<Record<string, string>>(
      (prev, [key, value]) => (value ? { ...prev, [key]: value } : prev),
      {}
    )
  );
