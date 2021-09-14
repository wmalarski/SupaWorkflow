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

export type MessageTemplateNodeData = {
  kind: MessageKind.TemplateNode;
  position: MessageNodePosition;
  teamId: number | null;
  isTargetAll: boolean;
  title: string;
  description: string;
};

export type MessageWorkflowNodeData = {
  kind: MessageKind.WorkflowNode;
  isDone: boolean;
};

export type MessageTemplateEdgeData = {
  kind: MessageKind.TemplateEdge;
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
};

export type MessageWorkflowEdgeData = {
  kind: MessageKind.WorkflowEdge;
  template: MessageTemplateEdgeData;
};

export type MessageChecklistTemplateNodeData = MessageTemplateNodeData & {
  datatype: MessageNodeType.Checklist;
  tasks: string[];
};

export type MessageFormTemplateNodeData = MessageTemplateNodeData & {
  datatype: MessageNodeType.Form;
  fields: string[];
};

export type MessageDecisionTemplateNodeData = MessageTemplateNodeData & {
  datatype: MessageNodeType.Decision;
  routes: string[];
};

export type MessageChecklistWorkflowNodeData = MessageWorkflowNodeData & {
  datatype: MessageNodeType.Checklist;
  checked: number[];
  template: MessageChecklistTemplateNodeData;
};

export type MessageFormWorkflowNodeData = MessageWorkflowNodeData & {
  datatype: MessageNodeType.Form;
  values: Record<number, string>;
  template: MessageFormTemplateNodeData;
};

export type MessageDecisionWorkflowNodeData = MessageWorkflowNodeData & {
  datatype: MessageNodeType.Decision;
  selected: number | null;
  template: MessageDecisionTemplateNodeData;
};

export type MessageElement =
  | MessageChecklistTemplateNodeData
  | MessageFormTemplateNodeData
  | MessageDecisionTemplateNodeData
  | MessageChecklistWorkflowNodeData
  | MessageFormWorkflowNodeData
  | MessageDecisionWorkflowNodeData
  | MessageTemplateEdgeData
  | MessageWorkflowEdgeData;
