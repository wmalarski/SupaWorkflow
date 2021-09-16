import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageChecklistWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowBoxForm from "../../workflowForms/WorkflowBoxForm/WorkflowBoxForm";
import WorkflowCheckboxesForm from "../../workflowForms/WorkflowCheckboxesForm/WorkflowCheckboxesForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowChecklistNode = ({
  data: {
    state,
    teams,
    isEnabled,
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
      <WorkflowBoxForm
        isEnabled={isEnabled}
        teamId={state.template.teamId}
        teams={teams}
      >
        <Handle type="target" position={Position.Left} />
        <VStack divider={<StackDivider borderColor="gray.200" />}>
          <WorkflowHeaderForm template={state.template} />
          <WorkflowAssigneeForm
            isEnabled={isEnabled}
            assigneeId={state.assigneeId}
            onChange={(assigneeId) => handleChange({ assigneeId })}
            teamMembers={teamMembers}
            teams={teams}
            teamId={state.template.teamId}
          />
          <WorkflowCheckboxesForm
            isEnabled={isEnabled}
            checked={state.checked}
            onChange={(checked) => handleChange({ checked })}
            options={state.template.tasks}
          />
          <WorkflowFooterForm
            isEnabled={isEnabled}
            isDone={state.isDone}
            onChange={(isDone) => handleChange({ isDone })}
          />
        </VStack>
        <Handle type="source" position={Position.Right} />
      </WorkflowBoxForm>
    ),
    [
      isEnabled,
      state.template,
      state.assigneeId,
      state.checked,
      state.isDone,
      teamMembers,
      teams,
      handleChange,
    ]
  );
};

export default WorkflowChecklistNode;
