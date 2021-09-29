import {
  MessageWorkflowEdgeState,
  MessageWorkflowNodeState,
  Team,
} from "services";
import { MutationArgs } from "utils/rep/types";

export type WorkflowNodeData<
  TState extends MessageWorkflowNodeState = MessageWorkflowNodeState
> = {
  teams: Team[];
  isEnabled: boolean;
  messageId: string;
  templateId: number;
  workflowId: number | null;
  state: TState;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type WorkflowEdgeData = {
  messageId: string;
  templateId: number;
  workflowId: number | null;
  state: MessageWorkflowEdgeState;
};

export type WorkflowData = WorkflowNodeData | WorkflowEdgeData;

export type WorkflowNodeProps<TState extends MessageWorkflowNodeState> = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  data: WorkflowNodeData<TState>;
};
