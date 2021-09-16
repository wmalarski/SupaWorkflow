import { createContext, ReactNode, useContext, useMemo } from "react";
import { defaultWorkflow, useSelectWorkflow, Workflow } from "../../services";

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
  workflowId: number;
  children: ReactNode;
  fallback?: ReactNode;
  enabled?: boolean;
  initialData?: Workflow;
};

export const WorkflowContextProvider = ({
  workflowId,
  children,
  enabled,
  fallback,
  initialData,
}: WorkflowContextProviderProps): React.ReactElement => {
  const { data } = useSelectWorkflow(
    { id: workflowId },
    { initialData, enabled }
  );

  const workflowValue = useMemo(
    () => data && { workflow: data, isInitialized: true },
    [data]
  );

  return workflowValue ? (
    <WorkflowContext.Provider value={workflowValue}>
      {children}
    </WorkflowContext.Provider>
  ) : (
    <>{fallback}</>
  );
};

export default WorkflowContext;
