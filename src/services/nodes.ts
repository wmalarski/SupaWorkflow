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
export type MessageTemplateNodeDataBase = {
  kind: MessageKind.TemplateNode;
  position: MessageNodePosition;
  teamId: number | null;
  isTargetAll: boolean;
  title: string;
  description: string;
};

export type MessageWorkflowNodeDataBase = {
  kind: MessageKind.WorkflowNode;
  assigneeId: number | null;
  isDone: boolean;
};

export type MessageTemplateEdgeDataBase = {
  kind: MessageKind.TemplateEdge;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
};

export type MessageWorkflowEdgeDataBase = {
  kind: MessageKind.WorkflowEdge;
  template: MessageTemplateEdgeDataBase;
};

// Discriminative types
export type MessageChecklistTemplateNodeData = MessageTemplateNodeDataBase & {
  datatype: MessageNodeType.Checklist;
  tasks: string[];
};

export type MessageFormTemplateNodeData = MessageTemplateNodeDataBase & {
  datatype: MessageNodeType.Form;
  fields: string[];
};

export type MessageDecisionTemplateNodeData = MessageTemplateNodeDataBase & {
  datatype: MessageNodeType.Decision;
  routes: string[];
};

export type MessageChecklistWorkflowNodeData = MessageWorkflowNodeDataBase & {
  datatype: MessageNodeType.Checklist;
  checked: number[];
  template: MessageChecklistTemplateNodeData;
};

export type MessageFormWorkflowNodeData = MessageWorkflowNodeDataBase & {
  datatype: MessageNodeType.Form;
  values: Record<number, string>;
  template: MessageFormTemplateNodeData;
};

export type MessageDecisionWorkflowNodeData = MessageWorkflowNodeDataBase & {
  datatype: MessageNodeType.Decision;
  selected: number | null;
  template: MessageDecisionTemplateNodeData;
};

// Union types
export type MessageTemplateNodeData =
  | MessageChecklistTemplateNodeData
  | MessageFormTemplateNodeData
  | MessageDecisionTemplateNodeData;

export type MessageWorkflowNodeData =
  | MessageChecklistWorkflowNodeData
  | MessageFormWorkflowNodeData
  | MessageDecisionWorkflowNodeData;

export type MessageTemplateEdgeData = MessageTemplateEdgeDataBase;

export type MessageWorkflowEdgeData = MessageWorkflowEdgeDataBase;

export type MessageElement =
  | MessageTemplateNodeData
  | MessageWorkflowNodeData
  | MessageTemplateEdgeData
  | MessageWorkflowEdgeData;
