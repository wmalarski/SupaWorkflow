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
import { MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import TemplateChecklistNode from "../../templateNodes/TemplateChecklistNode/TemplateChecklistNode";
import TemplateDecisionNode from "../../templateNodes/TemplateDecisionNode/TemplateDecisionNode";
import TemplateFormNode from "../../templateNodes/TemplateFormNode/TemplateFormNode";
import TemplateEditorBar from "../TemplateEditorBar/TemplateEditorBar";
import {
  elementsToMessages,
  getNewEdgeMessage,
  messagesToElements,
  TemplateNodeData,
} from "./TemplateEditorView.utils";

export type TemplateEditorViewProps = {
  templateId: number;
  teams: Team[];
  messages: Message[];
  onChange: (args: MutationArgs["putMessage"]) => void;
  onDelete: (args: MutationArgs["delMessage"]) => void;
};

const nodeTypes = {
  [MessageNodeType.ChecklistTemplate]: TemplateChecklistNode,
  [MessageNodeType.FormTemplate]: TemplateFormNode,
  [MessageNodeType.DecisionTemplate]: TemplateDecisionNode,
};

const TemplateEditorView = ({
  templateId,
  teams,
  messages,
  onChange,
  onDelete,
}: TemplateEditorViewProps): React.ReactElement => {
  const elements = useMemo<Elements<TemplateNodeData>>(
    () => messagesToElements({ teams, messages, onChange }),
    [messages, onChange, teams]
  );

  const handleElementsRemove = useCallback(
    (els: Elements<TemplateNodeData>) =>
      elementsToMessages(els).forEach(
        ({ data, id, template_id, workflow_id }) =>
          onDelete({ data, id, template_id, workflow_id })
      ),
    [onDelete]
  );

  const handleConnect = useCallback(
    (connection: Connection | Edge<TemplateNodeData>) => {
      const edge = getNewEdgeMessage({ connection, templateId });
      if (!edge) return;
      onChange(edge);
    },
    [onChange, templateId]
  );

  const handleNodeDragStop = useCallback(
    (_event: React.MouseEvent, node: Node<TemplateNodeData>) => {
      const updated = messages.find((message) => message.id === node.id);
      if (!updated || updated.data.kind !== "node") return;
      onChange({
        id: updated.id,
        template_id: updated.template_id,
        workflow_id: updated.workflow_id,
        data: {
          ...updated.data,
          kind: "node",
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
