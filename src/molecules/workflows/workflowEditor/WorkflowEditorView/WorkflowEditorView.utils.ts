import { Elements, FlowElement } from "react-flow-renderer";
import { Message, SelectTeamMemberRow, Team } from "../../../../services";
import {
  MessageKind,
  MessageWorkflowEdgeState,
  MessageWorkflowNodeState,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type WorkflowNodeData<
  TState extends MessageWorkflowNodeState = MessageWorkflowNodeState
> = {
  team?: Team;
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

export type MessageToElementOptions = {
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messageToElement = ({
  teams,
  teamMembers,
  message,
  onChange,
}: MessageToElementOptions): FlowElement<WorkflowData> | null => {
  const { id, state } = message;

  switch (state.kind) {
    case MessageKind.WorkflowEdge:
      return {
        id,
        source: state.template.source,
        target: state.template.target,
        connectable: false,
        draggable: false,
        animated: true,
        sourceHandle: state.template.sourceHandle,
        targetHandle: state.template.targetHandle,
        data: {
          state,
          messageId: message.id,
          templateId: message.template_id,
          workflowId: message.workflow_id,
        },
      };
    case MessageKind.WorkflowNode:
      return {
        id,
        position: state.template.position,
        type: state.nodeType,
        style: { width: 300 },
        connectable: false,
        draggable: false,
        data: {
          state,
          onChange,
          messageId: message.id,
          templateId: message.template_id,
          workflowId: message.workflow_id,
          team: teams.find((t) => t.id === state.template.teamId),
          teamMembers: teamMembers.filter(
            (member) => member.team_id === state.template.teamId
          ),
        },
      };
    default:
      return null;
  }
};

export type MessagesToElementsOptions = {
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messagesToElements = ({
  teams,
  teamMembers,
  messages,
  onChange,
}: MessagesToElementsOptions): Elements<WorkflowData> =>
  messages.flatMap((message) => {
    const element = messageToElement({ teams, teamMembers, message, onChange });
    return element ? [element] : [];
  });
