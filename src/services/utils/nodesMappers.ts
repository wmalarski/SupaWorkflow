import { nanoid } from "nanoid";
import { UpsertMessageArgs } from "../data/message/upsertMessages";
import {
  MessageKind,
  MessageNodeType,
  MessageState,
  MessageTemplateNodeState,
  MessageWorkflowNodeState,
} from "../nodes";
import { Message } from "../types";

const getNewNodeState = (
  templateNodeId: string,
  state: MessageTemplateNodeState
): MessageWorkflowNodeState => {
  switch (state.nodeType) {
    case MessageNodeType.Checklist:
      return {
        kind: MessageKind.WorkflowNode,
        nodeType: MessageNodeType.Checklist,
        checked: [],
        isDone: false,
        template: state,
        templateNodeId,
      };
    case MessageNodeType.Decision:
      return {
        kind: MessageKind.WorkflowNode,
        nodeType: MessageNodeType.Decision,
        selected: null,
        isDone: false,
        template: state,
        templateNodeId,
      };
    case MessageNodeType.Form:
      return {
        kind: MessageKind.WorkflowNode,
        nodeType: MessageNodeType.Form,
        values: {},
        isDone: false,
        template: state,
        templateNodeId,
      };
  }
};

const mapState = (
  templateNodeId: string,
  state: MessageState
): MessageState => {
  switch (state.kind) {
    case MessageKind.TemplateEdge:
      return {
        kind: MessageKind.WorkflowEdge,
        template: state,
      };
    case MessageKind.TemplateNode: {
      state.nodeType;
      return getNewNodeState(templateNodeId, state);
    }
    default:
      return state;
  }
};

export type MapTemplateToWorkflowOptions = {
  messages: Message[];
  workflowId: number;
};

export const mapTemplateToWorkflow = ({
  workflowId,
  messages,
}: MapTemplateToWorkflowOptions): UpsertMessageArgs[] =>
  messages.map((message) => ({
    deleted: false,
    id: nanoid(),
    template_id: message.template_id,
    workflow_id: workflowId,
    state: mapState(message.id, message.state),
  }));
