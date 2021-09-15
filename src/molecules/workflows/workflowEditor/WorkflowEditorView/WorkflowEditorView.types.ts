import { SelectTeamMemberRow, Team } from "../../../../services";
import {
  MessageWorkflowEdgeState,
  MessageWorkflowNodeState,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type WorkflowNodeData<
  TState extends MessageWorkflowNodeState = MessageWorkflowNodeState
> = {
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
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
