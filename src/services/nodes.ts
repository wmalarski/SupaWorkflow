export enum MessageKind {
  TemplateNode = "TemplateNode",
  WorkflowNode = "WorkflowNode",
  TemplateEdge = "TemplateEdge",
  WorkflowEdge = "WorkflowEdge",
}

export enum MessageNodeType {
  Checklist = "Checklist",
  Form = "Form",
  Decision = "Decision",
}

export type MessageNodePosition = {
  x: number;
  y: number;
};

// Base types
export type MessageTemplateNodeBaseState = {
  kind: MessageKind.TemplateNode;
  position: MessageNodePosition;
  teamId: number | null;
  isTargetAll: boolean;
  title: string;
  description: string;
};

export type MessageWorkflowNodeBaseState = {
  kind: MessageKind.WorkflowNode;
  assigneeId: number | null;
  isDone: boolean;
};

export type MessageTemplateEdgeBaseState = {
  kind: MessageKind.TemplateEdge;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
};

export type MessageWorkflowEdgeBaseState = {
  kind: MessageKind.WorkflowEdge;
  template: MessageTemplateEdgeBaseState;
};

// Discriminative types
export type MessageChecklistTemplateNodeState = MessageTemplateNodeBaseState & {
  nodeType: MessageNodeType.Checklist;
  tasks: string[];
};

export type MessageFormTemplateNodeState = MessageTemplateNodeBaseState & {
  nodeType: MessageNodeType.Form;
  fields: string[];
};

export type MessageDecisionTemplateNodeState = MessageTemplateNodeBaseState & {
  nodeType: MessageNodeType.Decision;
  routes: string[];
};

export type MessageChecklistWorkflowNodeState = MessageWorkflowNodeBaseState & {
  nodeType: MessageNodeType.Checklist;
  checked: number[];
  template: MessageChecklistTemplateNodeState;
};

export type MessageFormWorkflowNodeState = MessageWorkflowNodeBaseState & {
  nodeType: MessageNodeType.Form;
  values: Record<number, string>;
  template: MessageFormTemplateNodeState;
};

export type MessageDecisionWorkflowNodeState = MessageWorkflowNodeBaseState & {
  nodeType: MessageNodeType.Decision;
  selected: number | null;
  template: MessageDecisionTemplateNodeState;
};

// Union types
export type MessageTemplateNodeState =
  | MessageChecklistTemplateNodeState
  | MessageFormTemplateNodeState
  | MessageDecisionTemplateNodeState;

export type MessageWorkflowNodeState =
  | MessageChecklistWorkflowNodeState
  | MessageFormWorkflowNodeState
  | MessageDecisionWorkflowNodeState;

export type MessageTemplateEdgeState = MessageTemplateEdgeBaseState;

export type MessageWorkflowEdgeState = MessageWorkflowEdgeBaseState;

export type MessageState =
  | MessageTemplateNodeState
  | MessageWorkflowNodeState
  | MessageTemplateEdgeState
  | MessageWorkflowEdgeState;
