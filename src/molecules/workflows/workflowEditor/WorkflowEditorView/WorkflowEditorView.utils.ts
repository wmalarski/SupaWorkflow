import { Elements, FlowElement } from "react-flow-renderer";
import { Message, SelectTeamMemberRow, Team } from "../../../../services";
import {
  MessageKind,
  MessageNodeType,
  MessageWorkflowEdgeState,
} from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import { WorkflowData } from "./WorkflowEditorView.types";

export type MessageToElementOptions = {
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
  message: Message;
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

const findLabel = (
  state: MessageWorkflowEdgeState,
  messages: Message[]
): string =>
  messages.flatMap((e) =>
    state.template.sourceHandle &&
    e.state.kind === MessageKind.WorkflowNode &&
    e.state.template.kind === MessageKind.TemplateNode &&
    String(e.state.templateId) === state.template.source &&
    e.state.template.nodeType === MessageNodeType.Decision
      ? [e.state.template.routes[Number(state.template.sourceHandle)]]
      : []
  )[0];

export const messageToElement = ({
  teams,
  teamMembers,
  message,
  messages,
  onChange,
}: MessageToElementOptions): FlowElement<WorkflowData> | null => {
  const { id, state } = message;

  switch (state.kind) {
    case MessageKind.WorkflowEdge:
      return {
        id,
        label: findLabel(state, messages),
        source: state.template.source,
        target: state.template.target,
        connectable: false,
        animated: true,
        sourceHandle: state.template.sourceHandle,
        targetHandle: state.template.targetHandle,
        data: {
          state,
          messageId: message.id,
          templateId: message.template_id,
          workflowId: message.workflow_id,
        },
      };
    case MessageKind.WorkflowNode: {
      return {
        id,
        position: state.template.position,
        type: state.nodeType,
        style: { width: 300 },
        animated: true,
        connectable: false,
        data: {
          state,
          onChange,
          messageId: message.id,
          templateId: message.template_id,
          workflowId: message.workflow_id,
          teams,
          teamMembers,
        },
      };
    }
    default:
      return null;
  }
};

export type MessagesToElementsOptions = {
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messagesToElements = ({
  teams,
  teamMembers,
  messages,
  onChange,
}: MessagesToElementsOptions): Elements<WorkflowData> =>
  messages.flatMap((message) => {
    const element = messageToElement({
      teams,
      teamMembers,
      message,
      messages,
      onChange,
    });
    return element ? [element] : [];
  });
