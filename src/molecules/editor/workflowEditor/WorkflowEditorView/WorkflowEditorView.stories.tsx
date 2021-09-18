import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useCallback, useEffect, useState } from "react";
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
    state: {
      kind: MessageKind.WorkflowNode,
      nodeType: MessageNodeType.Decision,
      selected: null,
      isDone: false,
      templateNodeId: "1",
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 0, y: 300 },
        nodeType: MessageNodeType.Decision,
        routes: ["route1", "route2"],
        teamId: defaultTeams[4].id,
        isTargetAll: false,
        description: "Decision Description",
        title: "Decision 1",
      },
    },
  },
  {
    ...baseMessage,
    id: "2",
    state: {
      kind: MessageKind.WorkflowNode,
      nodeType: MessageNodeType.Checklist,
      checked: [],
      isDone: false,
      templateNodeId: "2",
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 350, y: 600 },
        nodeType: MessageNodeType.Checklist,
        tasks: ["check1", "check2"],
        teamId: defaultTeams[0].id,
        isTargetAll: false,
        description: "ChecklistTemplate Title",
        title: "Checklist 2",
      },
    },
  },
  {
    ...baseMessage,
    id: "3",
    state: {
      kind: MessageKind.WorkflowNode,
      nodeType: MessageNodeType.Form,
      values: {},
      isDone: false,
      templateNodeId: "3",
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 350, y: 300 },
        nodeType: MessageNodeType.Form,
        fields: ["field1", "field2"],
        teamId: defaultTeams[2].id,
        isTargetAll: true,
        description: "FormTemplate Title",
        title: "Form 3",
      },
    },
  },
  {
    ...baseMessage,
    id: "4",
    state: {
      kind: MessageKind.WorkflowNode,
      nodeType: MessageNodeType.Checklist,
      checked: [1],
      isDone: false,
      templateNodeId: "4",
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 350, y: 0 },
        nodeType: MessageNodeType.Checklist,
        tasks: ["check1", "check2"],
        teamId: defaultTeams[0].id,
        isTargetAll: false,
        description: "ChecklistTemplate Title",
        title: "Checklist 4",
      },
    },
  },
  {
    ...baseMessage,
    id: "5",
    state: {
      kind: MessageKind.WorkflowNode,
      nodeType: MessageNodeType.Form,
      values: { 0: "Value" },
      isDone: false,
      templateNodeId: "5",
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 700, y: 450 },
        nodeType: MessageNodeType.Form,
        fields: ["field1", "field2"],
        teamId: null,
        isTargetAll: false,
        description: "FormTemplate Title",
        title: "Form 5",
      },
    },
  },
  {
    ...baseMessage,
    id: "6",
    state: {
      kind: MessageKind.WorkflowNode,
      nodeType: MessageNodeType.Form,
      values: { 1: "Value" },
      isDone: false,
      templateNodeId: "6",
      template: {
        kind: MessageKind.TemplateNode,
        position: { x: 700, y: 150 },
        nodeType: MessageNodeType.Form,
        fields: ["field1", "field2"],
        teamId: defaultTeams[1].id,
        isTargetAll: true,
        description: "FormTemplate Title",
        title: "Form 6",
      },
    },
  },
  {
    ...baseMessage,
    id: "e1-4",
    state: {
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
    state: {
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
    state: {
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
    state: {
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
    state: {
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
    state: {
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
    state: {
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
    <WorkflowEditorView
      {...props}
      messages={messages}
      onChange={handleChange}
    />
  );
};

export const Playground = Template.bind({});
Playground.args = {
  messages: initialMessages,
  teams: defaultTeams,
};
