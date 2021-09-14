import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useEffect, useState } from "react";
import { defaultTeams, Message } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import WorkflowEditorView from "./WorkflowEditorView";

const baseMessage = {
  deleted: false,
  template_id: 1,
  updated_at: "",
  workflow_id: 1,
};

const initialTemplates: Message[] = [
  {
    ...baseMessage,
    id: "1",
    data: {
      kind: "node",
      position: { x: 250, y: 250 },
      datatype: MessageNodeType.DecisionTemplate,
      routes: ["route1", "route2"],
      teamIds: [defaultTeams[2].id, defaultTeams[3].id, defaultTeams[4].id],
      isTargetAll: false,
      description: "Decision Description",
      title: "Decision 1",
    },
  },
  {
    ...baseMessage,
    id: "2",
    data: {
      kind: "node",
      position: { x: 50, y: 125 },
      datatype: MessageNodeType.ChecklistTemplate,
      tasks: ["check1", "check2"],
      teamIds: [defaultTeams[0].id, defaultTeams[2].id],
      isTargetAll: false,
      description: "ChecklistTemplate Title",
      title: "Checklist 2",
    },
  },
  {
    ...baseMessage,
    id: "3",
    data: {
      kind: "node",
      position: { x: 300, y: 125 },
      datatype: MessageNodeType.FormTemplate,
      fields: ["field1", "field2"],
      teamIds: [defaultTeams[1].id, defaultTeams[2].id],
      isTargetAll: true,
      description: "FormTemplate Title",
      title: "Form 3",
    },
  },
  {
    ...baseMessage,
    id: "4",
    data: {
      kind: "node",
      position: { x: 300, y: 325 },
      datatype: MessageNodeType.ChecklistTemplate,
      tasks: ["check1", "check2"],
      teamIds: [defaultTeams[0].id, defaultTeams[2].id],
      isTargetAll: false,
      description: "ChecklistTemplate Title",
      title: "Checklist 4",
    },
  },
  {
    ...baseMessage,
    id: "5",
    data: {
      kind: "node",
      position: { x: 100, y: 325 },
      datatype: MessageNodeType.FormTemplate,
      fields: ["field1", "field2"],
      teamIds: [defaultTeams[1].id, defaultTeams[2].id],
      isTargetAll: true,
      description: "FormTemplate Title",
      title: "Form 5",
    },
  },
  {
    ...baseMessage,
    id: "e1-2",
    data: { kind: "edge", source: "1", target: "2", sourceHandle: "0" },
  },
  {
    ...baseMessage,
    id: "e2-3",
    data: { kind: "edge", source: "2", target: "3" },
  },
];

const initialMessages: Message[] = [
  {
    ...baseMessage,
    id: "1",
    data: {
      kind: "node",
      position: { x: 250, y: 250 },
      datatype: MessageNodeType.DecisionWorkflow,
    },
  },
  {
    ...baseMessage,
    id: "2",
    data: {
      kind: "node",
      position: { x: 50, y: 125 },
      datatype: MessageNodeType.ChecklistWorkflow,
    },
  },
  {
    ...baseMessage,
    id: "3",
    data: {
      kind: "node",
      position: { x: 300, y: 125 },
      datatype: MessageNodeType.FormWorkflow,
    },
  },
  {
    ...baseMessage,
    id: "4",
    data: {
      kind: "node",
      position: { x: 300, y: 325 },
      datatype: MessageNodeType.ChecklistWorkflow,
    },
  },
  {
    ...baseMessage,
    id: "5",
    data: {
      kind: "node",
      position: { x: 100, y: 325 },
      datatype: MessageNodeType.FormWorkflow,
    },
  },
  {
    ...baseMessage,
    id: "e1-2",
    data: { kind: "edge", source: "1", target: "2", sourceHandle: "0" },
  },
  {
    ...baseMessage,
    id: "e2-3",
    data: { kind: "edge", source: "2", target: "3" },
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
      onChange={() =>
        setMessages((current) => {
          return current;
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
  templates: initialTemplates,
  workflowId: 1,
};
