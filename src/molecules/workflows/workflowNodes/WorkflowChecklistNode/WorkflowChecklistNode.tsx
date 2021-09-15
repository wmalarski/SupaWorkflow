import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageChecklistWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowCheckboxesForm from "../../workflowForms/WorkflowCheckboxesForm/WorkflowCheckboxesForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowChecklistNode = ({
  data: {
    state,
    team,
    teamMembers,
    templateId,
    messageId,
    workflowId,
    onChange,
  },
}: WorkflowNodeProps<MessageChecklistWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = (newState: Partial<MessageChecklistWorkflowNodeState>) =>
    onChange({
      state: { ...state, ...newState },
      id: messageId,
      template_id: templateId,
      workflow_id: workflowId,
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
        <WorkflowCheckboxesForm
          checked={state.checked}
          onChange={(checked) => handleChange({ checked })}
          options={state.template.tasks}
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
