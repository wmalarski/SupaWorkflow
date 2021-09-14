import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { defaultTeams, Message } from "../../../../services";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import WorkflowEditorView from "./WorkflowEditorView";

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
      kind: MessageKind.WorkflowNode,
      datatype: MessageNodeType.Decision,
      selected: null,
      isDone: false,
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 0, y: 150 },
        datatype: MessageNodeType.Decision,
        routes: ["route1", "route2"],
        teamIds: [defaultTeams[2].id, defaultTeams[3].id, defaultTeams[4].id],
        isTargetAll: false,
        description: "Decision Description",
        title: "Decision 1",
      },
    },
  },
  {
    ...baseMessage,
    id: "2",
    data: {
      kind: MessageKind.WorkflowNode,
      datatype: MessageNodeType.Checklist,
      checked: [],
      isDone: false,
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 350, y: 300 },
        datatype: MessageNodeType.Checklist,
        tasks: ["check1", "check2"],
        teamIds: [defaultTeams[0].id, defaultTeams[2].id],
        isTargetAll: false,
        description: "ChecklistTemplate Title",
        title: "Checklist 2",
      },
    },
  },
  {
    ...baseMessage,
    id: "3",
    data: {
      kind: MessageKind.WorkflowNode,
      datatype: MessageNodeType.Form,
      values: {},
      isDone: false,
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 350, y: 150 },
        datatype: MessageNodeType.Form,
        fields: ["field1", "field2"],
        teamIds: [defaultTeams[1].id, defaultTeams[2].id],
        isTargetAll: true,
        description: "FormTemplate Title",
        title: "Form 3",
      },
    },
  },
  {
    ...baseMessage,
    id: "4",
    data: {
      kind: MessageKind.WorkflowNode,
      datatype: MessageNodeType.Checklist,
      checked: [1],
      isDone: false,
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 350, y: 0 },
        datatype: MessageNodeType.Checklist,
        tasks: ["check1", "check2"],
        teamIds: [defaultTeams[0].id, defaultTeams[2].id],
        isTargetAll: false,
        description: "ChecklistTemplate Title",
        title: "Checklist 4",
      },
    },
  },
  {
    ...baseMessage,
    id: "5",
    data: {
      kind: MessageKind.WorkflowNode,
      datatype: MessageNodeType.Form,
      values: { 0: "Value" },
      isDone: false,
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 700, y: 225 },
        datatype: MessageNodeType.Form,
        fields: ["field1", "field2"],
        teamIds: [defaultTeams[1].id, defaultTeams[2].id],
        isTargetAll: true,
        description: "FormTemplate Title",
        title: "Form 5",
      },
    },
  },
  {
    ...baseMessage,
    id: "6",
    data: {
      kind: MessageKind.WorkflowNode,
      datatype: MessageNodeType.Form,
      values: { 1: "Value" },
      isDone: false,
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 700, y: 75 },
        datatype: MessageNodeType.Form,
        fields: ["field1", "field2"],
        teamIds: [defaultTeams[1].id, defaultTeams[2].id],
        isTargetAll: true,
        description: "FormTemplate Title",
        title: "Form 6",
      },
    },
  },
  {
    ...baseMessage,
    id: "e1-4",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "1",
        target: "4",
        sourceHandle: "0",
      },
    },
  },
  {
    ...baseMessage,
    id: "e1-3",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "1",
        target: "3",
        sourceHandle: "0",
      },
    },
  },
  {
    ...baseMessage,
    id: "e1-2",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "1",
        target: "2",
        sourceHandle: "1",
      },
    },
  },
  {
    ...baseMessage,
    id: "e4-6",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "4",
        target: "6",
      },
    },
  },
  {
    ...baseMessage,
    id: "e3-6",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "3",
        target: "6",
      },
    },
  },
  {
    ...baseMessage,
    id: "e3-5",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "3",
        target: "5",
      },
    },
  },
  {
    ...baseMessage,
    id: "e2-5",
    data: {
      kind: MessageKind.WorkflowEdge,
      template: {
        kind: MessageKind.TemplateEdge,
        source: "2",
        target: "5",
      },
    },
  },
];

export default {
  title: "Molecules/Workflows/WorkflowEditorView",
  component: WorkflowEditorView,
} as ComponentMeta<typeof WorkflowEditorView>;

const Template: ComponentStory<typeof WorkflowEditorView> = (props) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => setMessages(props.messages), [props.messages]);

  return (
    <WorkflowEditorView
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
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  messages: initialMessages,
  teams: defaultTeams,
  templateId: 1,
  workflowId: 1,
};
