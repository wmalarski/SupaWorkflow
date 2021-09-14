import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { defaultTeams, Message } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
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
      datatype: MessageNodeType.ChecklistTemplate,
      tasks: ["check1", "check2"],
      teamIds: [defaultTeams[0].id, defaultTeams[2].id],
      isTargetAll: false,
      description: "ChecklistTemplate Title",
      title: "ChecklistTemplate Title",
    },
  },
  {
    ...baseMessage,
    id: "2",
    data: {
      kind: "node",
      position: { x: 100, y: 125 },
      datatype: MessageNodeType.FormTemplate,
      fields: ["field1", "field2"],
      teamIds: [defaultTeams[1].id, defaultTeams[2].id],
      isTargetAll: true,
      description: "FormTemplate Title",
      title: "FormTemplate Title",
    },
  },
  {
    ...baseMessage,
    id: "3",
    data: {
      kind: "node",
      position: { x: 250, y: 250 },
      datatype: MessageNodeType.DecisionTemplate,
      routes: ["route1", "route2"],
      teamIds: [defaultTeams[2].id, defaultTeams[3].id, defaultTeams[4].id],
      isTargetAll: false,
      description: "Decision Description",
      title: "Decision Title",
    },
  },
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

const Template: ComponentStory<typeof TemplateEditorView> = (props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => setMessages(props.messages), [props.messages]);

  return (
    <TemplateEditorView
      {...props}
      messages={messages}
      onChange={(args) =>
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
        })
      }
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
