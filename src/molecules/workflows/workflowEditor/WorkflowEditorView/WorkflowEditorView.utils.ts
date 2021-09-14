import { Elements, FlowElement } from "react-flow-renderer";
import { Message, Team } from "../../../../services";
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
}: MessageToElementOptions): FlowElement<WorkflowNodeData> => {
  const { id, data } = message;

  switch (data.kind) {
    case "edge":
      return {
        id,
        source: data.source,
        target: data.target,
        sourceHandle: data.sourceHandle,
        targetHandle: data.targetHandle,
        data: { teams, message, onChange },
      };
    case "node":
      return {
        id,
        position: data.position,
        type: data.datatype,
        style: { width: 300 },
        data: { teams, message, onChange },
      };
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
  messages.map((message) => messageToElement({ teams, message, onChange }));
