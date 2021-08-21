import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectWorkflow } from "../../services/data/workflow/selectWorkflow";
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
}: WorkflowContextProviderProps): JSX.Element => {
  const { data } = useSelectWorkflow(
    { id: workflow.id },
    { initialData: workflow }
  );

  const value = useMemo(
    () => ({ workflow: data ?? workflow, isInitialized: true }),
    [data, workflow]
  );

  return (
    <WorkflowContext.Provider value={value}>
      {children}
    </WorkflowContext.Provider>
  );
};

export default WorkflowContext;
