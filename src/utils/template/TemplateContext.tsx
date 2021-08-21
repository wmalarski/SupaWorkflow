import { createContext, ReactNode, useContext } from "react";
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
}: TemplateContextProviderProps): JSX.Element => (
  <TemplateContext.Provider value={{ template, isInitialized: true }}>
    {children}
  </TemplateContext.Provider>
);

export default TemplateContext;
