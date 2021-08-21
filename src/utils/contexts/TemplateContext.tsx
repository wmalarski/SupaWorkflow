import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectTemplate } from "../../services/data/template/selectTemplate";
import { Template } from "../../services/types";
import { defaultTemplate } from "../../services/utils/defaults";

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
  template: Template;
  children: ReactNode;
};

export const TemplateContextProvider = ({
  template,
  children,
}: TemplateContextProviderProps): JSX.Element => {
  const { data } = useSelectTemplate(
    { id: template.id },
    { initialData: template }
  );

  const value = useMemo(
    () => ({ template: data ?? template, isInitialized: true }),
    [data, template]
  );

  return (
    <TemplateContext.Provider value={value}>
      {children}
    </TemplateContext.Provider>
  );
};

export default TemplateContext;
