export type MessageNodePosition = {
  x: number;
  y: number;
};

export type MessageNode = {
  kind: "node";
  position: MessageNodePosition;
  teamIds: number[];
};

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
}

export type MessageNodeChecklistTemplateData = MessageNode & {
  datatype: MessageNodeType.ChecklistTemplate;
  tasks: string[];
};

export type MessageNodeFormTemplateData = MessageNode & {
  datatype: MessageNodeType.FormTemplate;
  fields: string[];
};

export type MessageNodeDecisionTemplateData = MessageNode & {
  datatype: MessageNodeType.DecisionTemplate;
  routes: string[];
};

export type MessageElement =
  | MessageNodeChecklistTemplateData
  | MessageNodeFormTemplateData
  | MessageNodeDecisionTemplateData
  | MessageEdge;
