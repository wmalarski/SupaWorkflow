import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { defaultTeam, Message, Team } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import TemplateEditorView from "./TemplateEditorView";

const baseMessage = {
  deleted: false,
  template_id: 1,
  updated_at: "",
  workflow_id: 1,
};

const teams: Team[] = Array(5)
  .fill(defaultTeam)
  .map((team, index) => ({
    ...team,
    id: index,
    name: `${team.name}-${index}`,
  }));

const initialMessages: Message[] = [
  {
    ...baseMessage,
    id: "1",
    data: {
      kind: "node",
      position: { x: 50, y: 125 },
      datatype: MessageNodeType.ChecklistTemplate,
      tasks: ["check1", "check2"],
      teamIds: [teams[0].id, teams[2].id],
      isTargetAll: false,
    },
  },
  // default node
  {
    ...baseMessage,
    id: "2",
    data: {
      kind: "node",
      position: { x: 100, y: 125 },
      datatype: MessageNodeType.FormTemplate,
      fields: ["field1", "field2"],
      teamIds: [teams[1].id, teams[2].id],
      isTargetAll: true,
    },
  },
  {
    ...baseMessage,
    id: "3",
    // type: "output", // output node
    data: {
      kind: "node",
      position: { x: 250, y: 250 },
      datatype: MessageNodeType.DecisionTemplate,
      routes: ["route1", "route2"],
      teamIds: [teams[2].id, teams[3].id, teams[4].id],
      isTargetAll: false,
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
      teams={teams}
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
      templateId={args.templateId}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  messages: initialMessages,
  templateId: 1,
};
