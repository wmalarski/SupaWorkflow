import { nanoid } from "nanoid";
import { Elements, FlowElement } from "react-flow-renderer";
import { Message } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
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

export type GetNewMessageOptions = {
  datatype: MessageNodeType;
  templateId: number;
};

export const getNewMessage = ({
  datatype,
  templateId,
}: GetNewMessageOptions): MutationArgs["putMessage"] => {
  const base = {
    id: nanoid(),
    workflow_id: null,
    template_id: templateId,
  };

  switch (datatype) {
    case MessageNodeType.ChecklistTemplate:
      return {
        ...base,
        data: {
          datatype: MessageNodeType.ChecklistTemplate,
          kind: "node",
          position: { x: 0, y: 0 },
          tasks: [""],
        },
      };
    case MessageNodeType.DecisionTemplate:
      return {
        ...base,
        data: {
          datatype: MessageNodeType.DecisionTemplate,
          kind: "node",
          position: { x: 0, y: 0 },
          routes: [""],
        },
      };
    case MessageNodeType.FormTemplate:
      return {
        ...base,
        data: {
          datatype: MessageNodeType.FormTemplate,
          kind: "node",
          position: { x: 0, y: 0 },
          fields: [""],
        },
      };
  }
};
