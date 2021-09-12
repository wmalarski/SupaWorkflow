import { nanoid } from "nanoid";
import { Connection, Edge, Elements, FlowElement } from "react-flow-renderer";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateNodeData = {
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
  type: "ChecklistTemplate";
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
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messageToElement = ({
  message,
  onChange,
}: MessageToElementOptions): FlowElement<TemplateNodeData> => {
  const { id, data } = message;

  switch (data.kind) {
    case "edge":
      return {
        id,
        source: data.source,
        target: data.target,
        sourceHandle: data.sourceHandle,
        targetHandle: data.targetHandle,
        data: { message, onChange },
      };
    case "node":
      return {
        id,
        position: data.position,
        type: data.datatype,
        style: { width: 300 },
        data: { message, onChange },
      };
  }
};

export type MessagesToElementsOptions = {
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messagesToElements = ({
  messages,
  onChange,
}: MessagesToElementsOptions): Elements<TemplateNodeData> =>
  messages.map((message) => messageToElement({ message, onChange }));

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
          kind: "edge",
          source: connection.source,
          target: connection.target,
          sourceHandle: connection.sourceHandle,
          targetHandle: connection.targetHandle,
        },
      }
    : null;
