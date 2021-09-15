import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageChecklistWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowCheckboxesForm from "../../workflowForms/WorkflowCheckboxesForm/WorkflowCheckboxesForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowChecklistNode = ({
  data: {
    state,
    teams,
    teamMembers,
    templateId,
    messageId,
    workflowId,
    onChange,
  },
}: WorkflowNodeProps<MessageChecklistWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = useCallback(
    (newState: Partial<MessageChecklistWorkflowNodeState>) =>
      onChange({
        state: { ...state, ...newState },
        id: messageId,
        template_id: templateId,
        workflow_id: workflowId,
      }),
    [messageId, onChange, state, templateId, workflowId]
  );

  return useMemo(
    () => (
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
            teams={teams}
            teamId={state.template.teamId}
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
    ),
    [
      handleChange,
      state.assigneeId,
      state.checked,
      state.isDone,
      state.template,
      teams,
      teamMembers,
    ]
  );
};

export default WorkflowChecklistNode;
