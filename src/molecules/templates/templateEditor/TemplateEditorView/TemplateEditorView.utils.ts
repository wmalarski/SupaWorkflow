import { nanoid } from "nanoid";
import { Connection, Edge, Elements, FlowElement } from "react-flow-renderer";
import { Message, Team } from "../../../../services";
import {
  MessageKind,
  MessageNodeType,
  MessageTemplateEdgeState,
  MessageTemplateNodeState,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateNodeData<
  TState extends MessageTemplateNodeState = MessageTemplateNodeState
> = {
  teams: Team[];
  state: TState;
  messageId: string;
  templateId: number;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type TemplateEdgeData = {
  messageId: string;
  templateId: number;
  state: MessageTemplateEdgeState;
};

export type TemplateData = TemplateNodeData | TemplateEdgeData;

export type TemplateNodeProps<TState extends MessageTemplateNodeState> = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  data: TemplateNodeData<TState>;
};

export type MessageToElementOptions = {
  teams: Team[];
  message: Message;
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messageToElement = ({
  teams,
  message,
  messages,
  onChange,
}: MessageToElementOptions): FlowElement<TemplateData> | null => {
  const { id, state } = message;

  switch (state.kind) {
    case MessageKind.TemplateEdge: {
      const label = messages.flatMap((e) =>
        state.sourceHandle &&
        e.state.kind === MessageKind.TemplateNode &&
        e.id === state.source &&
        e.state.nodeType === MessageNodeType.Decision
          ? [e.state.routes[Number(state.sourceHandle)]]
          : []
      )[0];

      return {
        id,
        label,
        source: state.source,
        target: state.target,
        sourceHandle: state.sourceHandle,
        targetHandle: state.targetHandle,
        data: {
          state,
          messageId: message.id,
          templateId: message.template_id,
        },
      };
    }
    case MessageKind.TemplateNode:
      return {
        id,
        position: state.position,
        type: state.nodeType,
        style: { width: 300 },
        data: {
          teams,
          state,
          messageId: message.id,
          templateId: message.template_id,
          onChange,
        },
      };
    default:
      return null;
  }
};

export type MessagesToElementsOptions = {
  teams: Team[];
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messagesToElements = ({
  teams,
  messages,
  onChange,
}: MessagesToElementsOptions): Elements<TemplateData> =>
  messages.flatMap((message) => {
    const element = messageToElement({ teams, message, messages, onChange });
    return element ? [element] : [];
  });

export type GetNewEdgeMessageOptions = {
  templateId: number;
  connection: Connection | Edge<TemplateData>;
};

export const getNewEdgeMessage = ({
  connection,
  templateId,
}: GetNewEdgeMessageOptions): MutationArgs["putMessage"] | null =>
  connection.source && connection.target
    ? {
        id: nanoid(),
        template_id: templateId,
        workflow_id: null,
        state: {
          kind: MessageKind.TemplateEdge,
          source: connection.source,
          target: connection.target,
          sourceHandle: connection.sourceHandle,
          targetHandle: connection.targetHandle,
        },
      }
    : null;
