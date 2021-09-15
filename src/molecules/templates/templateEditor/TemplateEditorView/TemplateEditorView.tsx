import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Connection,
  Controls,
  Edge,
  Elements,
  Node,
} from "react-flow-renderer";
import { Message, Team } from "../../../../services";
import { MessageKind, MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import TemplateChecklistNode from "../../templateNodes/TemplateChecklistNode/TemplateChecklistNode";
import TemplateDecisionNode from "../../templateNodes/TemplateDecisionNode/TemplateDecisionNode";
import TemplateFormNode from "../../templateNodes/TemplateFormNode/TemplateFormNode";
import TemplateEditorBar from "../TemplateEditorBar/TemplateEditorBar";
import {
  getNewEdgeMessage,
  messagesToElements,
  TemplateData,
} from "./TemplateEditorView.utils";

export type TemplateEditorViewProps = {
  templateId: number;
  teams: Team[];
  messages: Message[];
  onChange: (args: MutationArgs["putMessage"]) => void;
  onDelete: (args: MutationArgs["delMessage"]) => void;
};

const nodeTypes = {
  [MessageNodeType.Checklist]: TemplateChecklistNode,
  [MessageNodeType.Form]: TemplateFormNode,
  [MessageNodeType.Decision]: TemplateDecisionNode,
};

const TemplateEditorView = ({
  templateId,
  teams,
  messages,
  onChange,
  onDelete,
}: TemplateEditorViewProps): React.ReactElement => {
  const elements = useMemo<Elements<TemplateData>>(
    () => messagesToElements({ teams, messages, onChange }),
    [messages, onChange, teams]
  );

  const handleElementsRemove = useCallback(
    (els: Elements<TemplateData>) =>
      els.forEach(
        ({ data }) =>
          data &&
          onDelete({
            state: data.state,
            id: data.messageId,
            template_id: data.templateId,
            workflow_id: null,
          })
      ),
    [onDelete]
  );

  const handleConnect = useCallback(
    (connection: Connection | Edge<TemplateData>) => {
      const edge = getNewEdgeMessage({ connection, templateId });
      if (!edge) return;
      onChange(edge);
    },
    [onChange, templateId]
  );

  const handleNodeDragStop = useCallback(
    (_event: React.MouseEvent, node: Node<TemplateData>) => {
      const updated = messages.find((message) => message.id === node.id);
      if (!updated || updated.state.kind !== MessageKind.TemplateNode) return;
      onChange({
        id: updated.id,
        template_id: updated.template_id,
        workflow_id: updated.workflow_id,
        state: {
          ...updated.state,
          kind: MessageKind.TemplateNode,
          position: node.position,
        },
      });
    },
    [messages, onChange]
  );

  return (
    <div style={{ height: 600, width: 1200 }}>
      <TemplateEditorBar onChange={onChange} templateId={templateId} />
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onElementsRemove={handleElementsRemove}
        onNodeDragStop={handleNodeDragStop}
        onConnect={handleConnect}
        snapToGrid
        deleteKeyCode={46} /* 'delete'-key */
      >
        <Background variant={BackgroundVariant.Dots} gap={12} size={0.5} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default TemplateEditorView;
