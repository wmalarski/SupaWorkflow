import { Elements, FlowElement } from "react-flow-renderer";
import { Message, Team } from "../../../../services";
import { MessageKind } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";

export type WorkflowNodeData = {
  teams: Team[];
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export type WorkflowNodeProps = {
  id: string;
  isConnectable: boolean;
  isDragging: boolean;
  selected: boolean;
  sourcePosition?: string;
  targetPosition?: string;
  type: string;
  xPos: number;
  yPos: number;
  data: WorkflowNodeData;
};

export type MessageToElementOptions = {
  teams: Team[];
  message: Message;
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messageToElement = ({
  teams,
  message,
  onChange,
}: MessageToElementOptions): FlowElement<WorkflowNodeData> | null => {
  const { id, data } = message;

  switch (data.kind) {
    case MessageKind.WorkflowEdge:
      return {
        id,
        source: data.template.source,
        target: data.template.target,
        sourceHandle: data.template.sourceHandle,
        targetHandle: data.template.targetHandle,
        data: { teams, message, onChange },
      };
    case MessageKind.WorkflowNode:
      return {
        id,
        position: data.template.position,
        type: data.datatype,
        style: { width: 300 },
        data: { teams, message, onChange },
      };
    default:
      return null;
  }
};

export type MessagesToElementsOptions = {
  teams: Team[];
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messagesToElements = ({
  teams,
  messages,
  onChange,
}: MessagesToElementsOptions): Elements<WorkflowNodeData> =>
  messages.flatMap((message) => {
    const element = messageToElement({ teams, message, onChange });
    return element ? [element] : [];
  });
