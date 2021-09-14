export type MessageNodePosition = {
  x: number;
  y: number;
};

export type MessageNode = {
  kind: "node";
  position: MessageNodePosition;
};

export type MessageTemplateNode = MessageNode & {
  teamIds: number[];
  isTargetAll: boolean;
  title: string;
  description: string;
};

export type MessageWorkflowNode = MessageNode;

export type MessageEdge = {
  kind: "edge";
  source: string;
  target: string;
  sourceHandle?: string | null;
  targetHandle?: string | null;
};

export enum MessageNodeType {
  ChecklistTemplate = "ChecklistTemplate",
  FormTemplate = "FormTemplate",
  DecisionTemplate = "DecisionTemplate",
  ChecklistWorkflow = "ChecklistWorkflow",
  FormWorkflow = "FormWorkflow",
  DecisionWorkflow = "DecisionWorkflow",
}

export type MessageNodeChecklistTemplateData = MessageTemplateNode & {
  datatype: MessageNodeType.ChecklistTemplate;
  tasks: string[];
};

export type MessageNodeFormTemplateData = MessageTemplateNode & {
  datatype: MessageNodeType.FormTemplate;
  fields: string[];
};

export type MessageNodeDecisionTemplateData = MessageTemplateNode & {
  datatype: MessageNodeType.DecisionTemplate;
  routes: string[];
};

export type MessageNodeChecklistWorkflowData = MessageWorkflowNode & {
  datatype: MessageNodeType.ChecklistWorkflow;
};

export type MessageNodeFormWorkflowData = MessageWorkflowNode & {
  datatype: MessageNodeType.FormWorkflow;
};

export type MessageNodeDecisionWorkflowData = MessageWorkflowNode & {
  datatype: MessageNodeType.DecisionWorkflow;
};

export type MessageElement =
  | MessageNodeChecklistTemplateData
  | MessageNodeFormTemplateData
  | MessageNodeDecisionTemplateData
  | MessageNodeChecklistWorkflowData
  | MessageNodeFormWorkflowData
  | MessageNodeDecisionWorkflowData
  | MessageEdge;
