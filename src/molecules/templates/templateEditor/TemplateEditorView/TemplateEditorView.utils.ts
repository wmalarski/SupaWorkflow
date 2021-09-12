import { Elements, FlowElement, Position } from "react-flow-renderer";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateNodeData = {
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type TemplateNodeProps = {
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
        sourcePosition: Position.Left,
        targetPosition: Position.Right,
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
