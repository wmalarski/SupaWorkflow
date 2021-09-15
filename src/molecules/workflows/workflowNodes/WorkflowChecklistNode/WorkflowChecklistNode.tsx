import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageChecklistWorkflowNodeState,
  MessageNodeType,
} from "../../../../services/nodes";
import {
  WorkflowNodeData,
  WorkflowNodeProps,
} from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowChecklistNode = ({
  data: { message, state, team, teamMembers, onChange },
}: WorkflowNodeProps<WorkflowNodeData>): React.ReactElement | null => {
  if (state.nodeType !== MessageNodeType.Checklist) return null;

  const handleChange = (newState: Partial<MessageChecklistWorkflowNodeState>) =>
    onChange({
      state: { ...state, ...newState },
      id: message.id,
      template_id: message.template_id,
      workflow_id: message.workflow_id,
    });

  return (
    <Box
      bg="white"
      border="solid"
      borderWidth={1}
      borderColor="black"
      borderRadius={5}
      padding={2}
    >
      <Handle type="target" position={Position.Left} />
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        <WorkflowHeaderForm template={state.template} />
        <WorkflowAssigneeForm
          assigneeId={state.assigneeId}
          onChange={(assigneeId) => handleChange({ assigneeId })}
          teamMembers={teamMembers}
          team={team}
        />
        <WorkflowFooterForm
          isDone={state.isDone}
          onChange={(isDone) => handleChange({ isDone })}
        />
      </VStack>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default WorkflowChecklistNode;
