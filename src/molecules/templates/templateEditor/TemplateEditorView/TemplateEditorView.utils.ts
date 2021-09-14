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
  const { id, data } = message;

  switch (data.kind) {
    case MessageKind.TemplateEdge: {
      const label = messages.flatMap((e) =>
        data.sourceHandle &&
        e.data.kind === MessageKind.TemplateNode &&
        e.id === data.source &&
        e.data.datatype === MessageNodeType.Decision
          ? [e.data.routes[Number(data.sourceHandle)]]
          : []
      )[0];

      return {
        id,
        label,
        source: data.source,
        target: data.target,
        sourceHandle: data.sourceHandle,
        targetHandle: data.targetHandle,
        data: { teams, message, onChange },
      };
    }
    case MessageKind.TemplateNode:
      return {
        id,
        position: data.position,
        type: data.datatype,
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
        data: {
          kind: MessageKind.TemplateEdge,
          source: connection.source,
          target: connection.target,
          sourceHandle: connection.sourceHandle,
          targetHandle: connection.targetHandle,
        },
      }
    : null;
