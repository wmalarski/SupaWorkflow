export type MessageNodePosition = {
  x: number;
  y: number;
};

export type MessageNode = {
  kind: "node";
  position: MessageNodePosition;
};

export type MessageEdge = {
  kind: "edge";
  source: string;
  target: string;
};

export type MessageNodeChecklistTemplateData = MessageNode & {
  datatype: "checklistTemplate";
  tasks: string[];
};

export type MessageNodeFormTemplateData = MessageNode & {
  datatype: "formTemplate";
  fields: string[];
};

export type MessageElement =
  | MessageNodeChecklistTemplateData
  | MessageNodeFormTemplateData
  | MessageEdge;
