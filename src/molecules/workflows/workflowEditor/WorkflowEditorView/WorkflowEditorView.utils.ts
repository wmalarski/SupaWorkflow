import { Elements, FlowElement } from "react-flow-renderer";
import { Message, SelectTeamMemberRow, Team } from "../../../../services";
import {
  MessageKind,
  MessageWorkflowEdgeData,
  MessageWorkflowNodeData,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type WorkflowNodeData = {
  team?: Team;
  teamMembers: SelectTeamMemberRow[];
  message: Message;
  data: MessageWorkflowNodeData;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type WorkflowEdgeData = {
  message: Message;
  data: MessageWorkflowEdgeData;
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
  const { id, data } = message;

  switch (data.kind) {
    case MessageKind.WorkflowEdge:
      return {
        id,
        source: data.template.source,
        target: data.template.target,
        sourceHandle: data.template.sourceHandle,
        targetHandle: data.template.targetHandle,
        data: {
          data,
          message,
        },
      };
    case MessageKind.WorkflowNode:
      return {
        id,
        position: data.template.position,
        type: data.datatype,
        style: { width: 300 },
        data: {
          data,
          message,
          onChange,
          team: teams.find((t) => t.id === data.template.teamId),
          teamMembers: teamMembers.filter(
            (member) => member.team_id === data.template.teamId
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
