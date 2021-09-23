import { PostgrestError } from "@supabase/supabase-js";
import { createContext, ReactNode, useContext, useMemo } from "react";
import { useSelectWorkflow } from "../data/workflow/selectWorkflow";
import { Workflow } from "../types";
import { defaultWorkflow } from "../utils/defaults";

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
  onError?: (err: PostgrestError) => void;
};

export const WorkflowContextProvider = ({
  workflowId,
  children,
  enabled,
  fallback,
  initialData,
  onError,
}: WorkflowContextProviderProps): React.ReactElement => {
  const { data } = useSelectWorkflow(
    { id: workflowId },
    { initialData, enabled, onError }
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
