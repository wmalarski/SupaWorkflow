import React, { useMemo } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Elements,
} from "react-flow-renderer";
import { Message, Team } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import WorkflowChecklistNode from "../../workflowNodes/WorkflowChecklistNode/WorkflowChecklistNode";
import WorkflowDecisionNode from "../../workflowNodes/WorkflowDecisionNode/WorkflowDecisionNode";
import WorkflowFormNode from "../../workflowNodes/WorkflowFormNode/WorkflowFormNode";
import {
  messagesToElements,
  WorkflowNodeData,
} from "./WorkflowEditorView.utils";

export type WorkflowEditorViewProps = {
  templateId: number;
  workflowId: number;
  teams: Team[];
  messages: Message[];
  templates: Message[];
  onChange: (args: MutationArgs["putMessage"]) => void;
};

const nodeTypes = {
  [MessageNodeType.ChecklistWorkflow]: WorkflowChecklistNode,
  [MessageNodeType.FormWorkflow]: WorkflowFormNode,
  [MessageNodeType.DecisionWorkflow]: WorkflowDecisionNode,
};

const WorkflowEditorView = ({
  teams,
  messages,
  onChange,
}: WorkflowEditorViewProps): React.ReactElement => {
  const elements = useMemo<Elements<WorkflowNodeData>>(
    () => messagesToElements({ teams, messages, onChange }),
    [messages, onChange, teams]
  );

  return (
    <div style={{ height: 600, width: 1200 }}>
      <ReactFlow elements={elements} nodeTypes={nodeTypes} snapToGrid>
        <Background variant={BackgroundVariant.Dots} gap={12} size={0.5} />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowEditorView;
