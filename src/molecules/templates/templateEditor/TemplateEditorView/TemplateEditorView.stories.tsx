import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { Message } from "../../../../services";
import TemplateEditorView from "./TemplateEditorView";

const baseMessage = {
  deleted: false,
  template_id: 1,
  updated_at: "",
  workflow_id: 1,
};

const initialMessages: Message[] = [
  {
    ...baseMessage,
    id: "1",
    data: {
      kind: "node",
      position: { x: 50, y: 125 },
      datatype: "formTemplate",
      fields: ["field1", "field2"],
    },
  },
  // default node
  {
    ...baseMessage,
    id: "2",
    data: {
      kind: "node",
      position: { x: 100, y: 125 },
      datatype: "formTemplate",
      fields: ["field1", "field2"],
    },
  },
  {
    ...baseMessage,
    id: "3",
    // type: "output", // output node
    data: {
      kind: "node",
      position: { x: 250, y: 250 },
      datatype: "decisionTemplate",
      routes: ["route1", "route2"],
    },
  },
  // animated edge
  {
    ...baseMessage,
    id: "e1-2",
    data: { kind: "edge", source: "1", target: "2" },
  },
  {
    ...baseMessage,
    id: "e2-3",
    data: { kind: "edge", source: "2", target: "3" },
  },
];

export type StoryArguments = {
  messages: Message[];
  templateId: string;
};

export default {
  title: "Molecules/Templates/TemplateEditorView",
  component: TemplateEditorView,
} as ComponentMeta<React.ComponentType<StoryArguments>>;

const Template: ComponentStory<typeof TemplateEditorView> = (args) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => setMessages(args.messages), [args.messages]);

  return (
    <TemplateEditorView
      messages={messages}
      onChange={() => void 0}
      onDelete={() => void 0}
      templateId={args.templateId}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  messages: initialMessages,
  templateId: 1,
};
