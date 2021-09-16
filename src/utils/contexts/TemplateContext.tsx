import { createContext, ReactNode, useContext, useMemo } from "react";
import { defaultTemplate, Template, useSelectTemplate } from "../../services";

export type TemplateContextValue = {
  template: Template;
  isInitialized: boolean;
};

const TemplateContext = createContext<TemplateContextValue>({
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
};

export const TemplateContextProvider = ({
  templateId,
  children,
  enabled,
  fallback,
  initialData,
}: TemplateContextProviderProps): React.ReactElement => {
  const { data } = useSelectTemplate(
    { id: templateId },
    { initialData, enabled }
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

export default TemplateContext;
