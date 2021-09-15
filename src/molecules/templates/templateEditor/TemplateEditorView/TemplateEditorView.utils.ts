import { nanoid } from "nanoid";
import { Connection, Edge, Elements, FlowElement } from "react-flow-renderer";
import { Message, Team } from "../../../../services";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateNodeData = {
  teams: Team[];
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type TemplateNodeProps = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  data: TemplateNodeData;
};

export const elementToMessage = (
  element: FlowElement<TemplateNodeData>
): Message | null => element.data?.message ?? null;

export const elementsToMessages = (
  elements: Elements<TemplateNodeData>
): Message[] =>
  elements.flatMap((element) => {
    const message = elementToMessage(element);
    return message ? [message] : [];
  });

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
}: MessageToElementOptions): FlowElement<TemplateNodeData> | null => {
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
        data: { teams, message, onChange },
      };
    }
    case MessageKind.TemplateNode:
      return {
        id,
        position: state.position,
        type: state.nodeType,
        style: { width: 300 },
        data: { teams, message, onChange },
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
}: MessagesToElementsOptions): Elements<TemplateNodeData> =>
  messages.flatMap((message) => {
    const element = messageToElement({ teams, message, messages, onChange });
    return element ? [element] : [];
  });

export type GetNewEdgeMessageOptions = {
  templateId: number;
  connection: Connection | Edge<TemplateNodeData>;
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
