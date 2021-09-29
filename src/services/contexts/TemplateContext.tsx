import { PostgrestError } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectTemplate } from "../data/template/selectTemplate";
import { defaultTemplate } from "../helpers/defaults";
import { Template } from "../types";

export type TemplateContextValue = {
  template: Template;
  isInitialized: boolean;
};

export const TemplateContext = createContext<TemplateContextValue>({
  template: defaultTemplate,
  isInitialized: false,
});

export const useTemplateContext = (): Template => {
  const value = useContext(TemplateContext);
  if (!value.isInitialized) throw "Template Context not initialized";
  return value.template;
};

export type TemplateContextProviderProps = {
  templateId: number;
  children: ReactNode;
  fallback?: ReactNode;
  initialData?: Template;
  enabled?: boolean;
  onError?: (err: PostgrestError) => void;
};

export const TemplateContextProvider = ({
  templateId,
  children,
  enabled,
  fallback,
  initialData,
  onError,
}: TemplateContextProviderProps): React.ReactElement => {
  const { data } = useSelectTemplate(
    { id: templateId },
    { initialData, enabled, onError }
  );

  const templateValue = useMemo(
    () => data && { template: data, isInitialized: true },
    [data]
  );

  return templateValue ? (
    <TemplateContext.Provider value={templateValue}>
      {children}
    </TemplateContext.Provider>
  ) : (
    <>{fallback}</>
  );
};
