import { Elements, FlowElement } from "react-flow-renderer";
import { Message, SelectTeamMemberRow, Team } from "../../../../services";
import {
  MessageKind,
  MessageWorkflowEdgeState,
  MessageWorkflowNodeState,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type WorkflowNodeData = {
  team?: Team;
  teamMembers: SelectTeamMemberRow[];
  message: Message;
  state: MessageWorkflowNodeState;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type WorkflowEdgeData = {
  message: Message;
  state: MessageWorkflowEdgeState;
};

export type WorkflowData = WorkflowNodeData | WorkflowEdgeData;

export type WorkflowNodeProps<TData extends WorkflowData> = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  data: TData;
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
        sourceHandle: state.template.sourceHandle,
        targetHandle: state.template.targetHandle,
        data: {
          state,
          message,
        },
      };
    case MessageKind.WorkflowNode:
      return {
        id,
        position: state.template.position,
        type: state.nodeType,
        style: { width: 300 },
        data: {
          state,
          message,
          onChange,
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
