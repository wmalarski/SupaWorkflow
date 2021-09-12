import React, { useCallback, useMemo } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Elements,
} from "react-flow-renderer";
import { Message } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import TemplateChecklistNode from "../TemplateChecklistNode/TemplateChecklistNode";
import TemplateDecisionNode from "../TemplateDecisionNode/TemplateDecisionNode";
import TemplateEditorBar from "../TemplateEditorBar/TemplateEditorBar";
import TemplateFormNode from "../TemplateFormNode/TemplateFormNode";
import {
  elementsToMessages,
  messagesToElements,
  TemplateNodeData,
} from "./TemplateEditorView.utils";

export type TemplateEditorViewProps = {
  templateId: number;
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
  messages,
  onChange,
  onDelete,
}: TemplateEditorViewProps): React.ReactElement => {
  const elements = useMemo<Elements<TemplateNodeData>>(
    () => messagesToElements({ messages, onChange }),
    [messages, onChange]
  );

  const handleElementsRemove = useCallback(
    (els: Elements<TemplateNodeData>) =>
      elementsToMessages(els).forEach(
        ({ data, id, template_id, workflow_id }) =>
          onDelete({ data, id, template_id, workflow_id })
      ),
    [onDelete]
  );

  return (
    <div style={{ height: 600, width: 1200 }}>
      <TemplateEditorBar onChange={onChange} templateId={templateId} />
      <ReactFlow
        elements={elements}
        nodeTypes={nodeTypes}
        onElementsRemove={handleElementsRemove}
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
