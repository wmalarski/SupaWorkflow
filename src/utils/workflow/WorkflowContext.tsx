import { createContext, ReactNode, useContext } from "react";
import { Workflow } from "../../services/types";
import { defaultWorkflow } from "../../services/utils/defaults";

export type WorkflowContextValue = {
  workflow: Workflow;
  isInitialized: boolean;
};

const WorkflowContext = createContext<WorkflowContextValue>({
  workflow: defaultWorkflow,
  isInitialized: false,
});

export const useWorkflowContext = (): Workflow => {
  const value = useContext(WorkflowContext);
  if (!value.isInitialized) throw "Workflow Context not initialized";
  return value.workflow;
};

export type WorkflowContextProviderProps = {
  workflow: Workflow;
  children: ReactNode;
};

export const WorkflowContextProvider = ({
  workflow,
  children,
}: WorkflowContextProviderProps): JSX.Element => (
  <WorkflowContext.Provider value={{ workflow, isInitialized: true }}>
    {children}
  </WorkflowContext.Provider>
);

export default WorkflowContext;
