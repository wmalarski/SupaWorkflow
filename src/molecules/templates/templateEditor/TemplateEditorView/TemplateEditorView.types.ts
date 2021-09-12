import { Message } from "../../../../services";
import { MutationArgs } from "../../../../utils/rep";

export type TemplateNodeData = {
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type TemplateNodeProps = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: "ChecklistTemplate";
  xPos: number;
  yPos: number;
  data: TemplateNodeData;
};
