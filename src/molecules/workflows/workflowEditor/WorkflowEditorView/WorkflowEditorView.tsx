import React, { useMemo } from "react";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  Elements,
} from "react-flow-renderer";
import { Message, SelectTeamMemberRow, Team } from "../../../../services";
import { MessageNodeType } from "../../../../services/nodes";
import { MutationArgs } from "../../../../utils/rep";
import WorkflowChecklistNode from "../../workflowNodes/WorkflowChecklistNode/WorkflowChecklistNode";
import WorkflowDecisionNode from "../../workflowNodes/WorkflowDecisionNode/WorkflowDecisionNode";
import WorkflowFormNode from "../../workflowNodes/WorkflowFormNode/WorkflowFormNode";
import { messagesToElements, WorkflowData } from "./WorkflowEditorView.utils";

export type WorkflowEditorViewProps = {
  templateId: number;
  workflowId: number;
  teams: Team[];
  teamMembers: SelectTeamMemberRow[];
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
  teamMembers,
  messages,
  onChange,
}: WorkflowEditorViewProps): React.ReactElement => {
  const elements = useMemo<Elements<WorkflowData>>(
    () => messagesToElements({ teams, teamMembers, messages, onChange }),
    [messages, onChange, teamMembers, teams]
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
