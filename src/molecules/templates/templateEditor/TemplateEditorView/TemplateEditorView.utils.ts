import { nanoid } from "nanoid";
import {
  ArrowHeadType,
  Connection,
  Edge,
  Elements,
  FlowElement,
} from "react-flow-renderer";
import { Message, Team } from "../../../../services";
import {
  MessageKind,
  MessageNodeType,
  MessageTemplateEdgeState,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import { TemplateData } from "./TemplateEditorView.types";

export type MessageToElementOptions = {
  teams: Team[];
  message: Message;
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const findLabel = (
  state: MessageTemplateEdgeState,
  messages: Message[]
): string =>
  messages.flatMap((e) =>
    state.sourceHandle &&
    e.state.kind === MessageKind.TemplateNode &&
    e.id === state.source &&
    e.state.nodeType === MessageNodeType.Decision
      ? [e.state.routes[Number(state.sourceHandle)]]
      : []
  )[0];

export const messageToElement = ({
  teams,
  message,
  messages,
  onChange,
}: MessageToElementOptions): FlowElement<TemplateData> | null => {
  const { id, state } = message;

  switch (state.kind) {
    case MessageKind.TemplateEdge:
      return {
        id,
        label: findLabel(state, messages),
        animated: true,
        arrowHeadType: ArrowHeadType.Arrow,
        source: state.source,
        target: state.target,
        sourceHandle: state.sourceHandle,
        targetHandle: state.targetHandle,
        data: {
          state,
          messageId: message.id,
          templateId: message.template_id,
        },
      };
    case MessageKind.TemplateNode:
      return {
        id,
        position: state.position,
        type: state.nodeType,
        style: { width: 300 },
        data: {
          teams,
          state,
          messageId: message.id,
          templateId: message.template_id,
          onChange,
        },
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
}: MessagesToElementsOptions): Elements<TemplateData> =>
  messages.flatMap((message) => {
    const element = messageToElement({ teams, message, messages, onChange });
    return element ? [element] : [];
  });

export type GetNewEdgeMessageOptions = {
  templateId: number;
  connection: Connection | Edge<TemplateData>;
};

export const getNewEdgeMessage = ({
  connection,
  templateId,
}: GetNewEdgeMessageOptions): MutationArgs["putMessage"] | null =>
  connection.source && connection.target
    ? {
        id: nanoid(),
        template_id: templateId,
        workflow_id: null,
        state: {
          kind: MessageKind.TemplateEdge,
          source: connection.source,
          target: connection.target,
          sourceHandle: connection.sourceHandle,
          targetHandle: connection.targetHandle,
        },
      }
    : null;
