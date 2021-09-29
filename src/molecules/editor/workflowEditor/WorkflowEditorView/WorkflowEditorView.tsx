import React, { useMemo } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Elements,
} from "react-flow-renderer";
import { Message, MessageNodeType, Team } from "services";
import { MutationArgs } from "utils/rep/types";
import WorkflowChecklistNode from "../../workflowNodes/WorkflowChecklistNode/WorkflowChecklistNode";
import WorkflowDecisionNode from "../../workflowNodes/WorkflowDecisionNode/WorkflowDecisionNode";
import WorkflowFormNode from "../../workflowNodes/WorkflowFormNode/WorkflowFormNode";
import { WorkflowData } from "./WorkflowEditorView.types";
import { messagesToElements } from "./WorkflowEditorView.utils";

export type WorkflowEditorViewProps = {
  teams: Team[];
  messages: Message[];
  onChange: (args: MutationArgs["putMessage"]) => void;
};

const nodeTypes = {
  [MessageNodeType.Checklist]: WorkflowChecklistNode,
  [MessageNodeType.Form]: WorkflowFormNode,
  [MessageNodeType.Decision]: WorkflowDecisionNode,
};

const WorkflowEditorView = ({
  teams,
  messages,
  onChange,
}: WorkflowEditorViewProps): React.ReactElement => {
  const elements = useMemo<Elements<WorkflowData>>(
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
