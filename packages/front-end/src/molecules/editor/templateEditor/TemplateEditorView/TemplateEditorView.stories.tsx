import { ComponentMeta, ComponentStory } from "@storybook/react";
import {
  defaultTeams,
  Message,
  MessageKind,
  MessageNodeType,
} from "@supa-workflow/services";
import React, { useCallback, useEffect, useState } from "react";
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
    state: {
      kind: MessageKind.TemplateNode,
      position: { x: 50, y: 125 },
      nodeType: MessageNodeType.Checklist,
      tasks: ["check1", "check2"],
      teamId: defaultTeams[2].id,
      isTargetAll: false,
      description: "ChecklistTemplate Title",
      title: "ChecklistTemplate Title",
    },
  },
  {
    ...baseMessage,
    id: "2",
    state: {
      kind: MessageKind.TemplateNode,
      position: { x: 100, y: 125 },
      nodeType: MessageNodeType.Form,
      fields: ["field1", "field2"],
      teamId: defaultTeams[1].id,
      isTargetAll: true,
      description: "FormTemplate Title",
      title: "FormTemplate Title",
    },
  },
  {
    ...baseMessage,
    id: "3",
    state: {
      kind: MessageKind.TemplateNode,
      position: { x: 250, y: 250 },
      nodeType: MessageNodeType.Decision,
      routes: ["route1", "route2"],
      teamId: null,
      isTargetAll: false,
      description: "Decision Description",
      title: "Decision Title",
    },
  },
  {
    ...baseMessage,
    id: "e1-2",
    state: { kind: MessageKind.TemplateEdge, source: "1", target: "2" },
  },
  {
    ...baseMessage,
    id: "e2-3",
    state: { kind: MessageKind.TemplateEdge, source: "2", target: "3" },
  },
];

export type StoryArguments = {
  messages: Message[];
  templateId: string;
};

export default {
  title: "Molecules/Editor/TemplateEditorView",
  component: TemplateEditorView,
} as ComponentMeta<React.ComponentType<StoryArguments>>;

const Template: ComponentStory<typeof TemplateEditorView> = (props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => setMessages(props.messages), [props.messages]);

  const handleChange = useCallback(
    (args) =>
      setMessages((current) => {
        const index = current.findIndex((message) => message.id === args.id);
        const next = [...current];
        next.splice(
          index,
          index < 0 ? 0 : 1,
          { ...current[index], ...args } ?? {
            ...args,
            deleted: false,
            updated_at: "",
          }
        );
        console.log({ args, current, next, index });
        return next;
      }),
    []
  );

  return (
    <TemplateEditorView
      {...props}
      messages={messages}
      onChange={handleChange}
      onDelete={(args) =>
        setMessages((current) =>
          current.filter((message) => message.id !== args.id)
        )
      }
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  messages: initialMessages,
  templateId: 1,
  teams: defaultTeams,
};
