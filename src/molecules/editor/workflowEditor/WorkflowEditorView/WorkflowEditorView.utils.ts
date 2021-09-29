import { ArrowHeadType, Elements, FlowElement } from "react-flow-renderer";
import {
  Message,
  MessageKind,
  MessageNodeType,
  MessageTemplateEdgeBaseState,
  MessageWorkflowEdgeState,
  MessageWorkflowNodeState,
  Team,
} from "services";
import { MutationArgs } from "utils/rep/types";
import { WorkflowData } from "./WorkflowEditorView.types";

const findLabel = (
  state: MessageWorkflowEdgeState,
  messages: Message[]
): string =>
  messages.flatMap((e) =>
    state.template.sourceHandle &&
    e.state.kind === MessageKind.WorkflowNode &&
    e.state.template.kind === MessageKind.TemplateNode &&
    e.state.templateNodeId === state.template.source &&
    e.state.template.nodeType === MessageNodeType.Decision
      ? [e.state.template.routes[Number(state.template.sourceHandle)]]
      : []
  )[0];

const findEnabledTreeRec = (
  target: MessageWorkflowNodeState,
  edges: MessageTemplateEdgeBaseState[],
  nodes: MessageWorkflowNodeState[],
  result: Record<string, boolean>
): Record<string, boolean> => {
  if (result[target.templateNodeId]) return result;

  const sources = edges
    .filter((edge) => edge.target === target.templateNodeId)
    .flatMap((edge) => {
      const source = nodes.find((node) => node.templateNodeId === edge.source);
      return source ? [{ source, edge }] : [];
    });

  if (sources.length === 0) return { ...result, [target.templateNodeId]: true };

  const updatedResult = sources.reduce<Record<string, boolean>>(
    (prev, { source }) => {
      if (prev[source.templateNodeId]) return prev;
      return { ...prev, ...findEnabledTreeRec(source, edges, nodes, prev) };
    },
    result
  );

  const predicate = ({
    source,
    edge,
  }: {
    source: MessageWorkflowNodeState;
    edge: MessageTemplateEdgeBaseState;
  }) => {
    const base = updatedResult[source.templateNodeId] && source.isDone;
    if (source.nodeType !== MessageNodeType.Decision) return base;
    return base && source.selected === Number(edge.sourceHandle);
  };

  return {
    ...updatedResult,
    [target.templateNodeId]: target.template.isTargetAll
      ? sources.every(predicate)
      : sources.some(predicate),
  };
};

const findEnabledTree = (messages: Message[]): Record<string, boolean> => {
  const edges = messages.flatMap((message) => {
    if (message.state.kind !== MessageKind.WorkflowEdge) return [];
    return [message.state.template];
  });

  const nodes = messages.flatMap((message) => {
    if (message.state.kind !== MessageKind.WorkflowNode) return [];
    return [message.state];
  });

  return nodes.reduce<Record<string, boolean>>((prev, state) => {
    if (prev[state.templateNodeId]) return prev;
    return { ...prev, ...findEnabledTreeRec(state, edges, nodes, prev) };
  }, {});
};

export type MessageToElementOptions = {
  teams: Team[];
  message: Message;
  messages: Message[];
  onChange: (message: MutationArgs["putMessage"]) => void;
};

export const messageToElement = ({
  teams,
  message,
  messages,
  onChange,
}: MessageToElementOptions): FlowElement<WorkflowData> | null => {
  const { id, state } = message;

  const isNodeEnabled = findEnabledTree(messages);

  switch (state.kind) {
    case MessageKind.WorkflowEdge:
      return {
        id,
        label: findLabel(state, messages),
        animated: true,
        connectable: false,
        arrowHeadType: ArrowHeadType.Arrow,
        source: state.template.source,
        target: state.template.target,
        sourceHandle: state.template.sourceHandle,
        targetHandle: state.template.targetHandle,
        style: {
          strokeWidth:
            isNodeEnabled[state.template.source] &&
            isNodeEnabled[state.template.target]
              ? 3
              : 1,
        },
        data: {
          state,
          messageId: message.id,
          templateId: message.template_id,
          workflowId: message.workflow_id,
        },
      };
    case MessageKind.WorkflowNode:
      return {
        id,
        position: state.template.position,
        type: state.nodeType,
        style: { width: 300 },
        connectable: false,
        data: {
          state,
          onChange,
          isEnabled: isNodeEnabled[id] ?? false,
          messageId: message.id,
          templateId: message.template_id,
          workflowId: message.workflow_id,
          teams,
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
}: MessagesToElementsOptions): Elements<WorkflowData> =>
  messages.flatMap((message) => {
    const element = messageToElement({
      teams,
      message,
      messages,
      onChange,
    });
    return element ? [element] : [];
  });
