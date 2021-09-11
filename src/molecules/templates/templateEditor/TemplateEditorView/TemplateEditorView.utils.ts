import React from "react";
import { Elements, FlowElement } from "react-flow-renderer";
import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";
import { TemplateNodeProps } from "../TemplateNode/TemplateNode";

export type TemplateNodeData = {
  message: Message;
  label?: React.ReactNode;
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
  renderer: React.ComponentType<TemplateNodeProps>;
};

export const messageToElement = ({
  message,
  onChange,
  renderer,
}: MessageToElementOptions): FlowElement<TemplateNodeData> => {
  const { id, data } = message;

  switch (data.kind) {
    case "edge":
      return {
        id,
        source: data.source,
        target: data.target,
        data: { message },
      };
    case "node":
      return {
        id,
        position: data.position,
        data: {
          message,
          label: React.createElement(renderer, { onChange, message }),
        },
      };
  }
};

export type MessagesToElementsOptions = {
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
  renderer: React.ComponentType<TemplateNodeProps>;
};

export const messagesToElements = ({
  messages,
  onChange,
  renderer,
}: MessagesToElementsOptions): Elements<TemplateNodeData> =>
  messages.map((message) => messageToElement({ message, onChange, renderer }));
