import {
  MessageTemplateEdgeState,
  MessageTemplateNodeState,
  Team,
} from "services";
import { MutationArgs } from "utils/rep/types";

export type TemplateNodeData<
  TState extends MessageTemplateNodeState = MessageTemplateNodeState
> = {
  teams: Team[];
  state: TState;
  messageId: string;
  templateId: number;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type TemplateEdgeData = {
  messageId: string;
  templateId: number;
  state: MessageTemplateEdgeState;
};

export type TemplateData = TemplateNodeData | TemplateEdgeData;

export type TemplateNodeProps<TState extends MessageTemplateNodeState> = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  data: TemplateNodeData<TState>;
};
