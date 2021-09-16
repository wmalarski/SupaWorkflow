import { StackDivider, VStack } from "@chakra-ui/react";
import React, { memo, useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageFormWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowBoxForm from "../../workflowForms/WorkflowBoxForm/WorkflowBoxForm";
import WorkflowFieldsForm from "../../workflowForms/WorkflowFieldsForm/WorkflowFieldsForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowFormNode = ({
  data: {
    state,
    teams,
    isEnabled,
    teamMembers,
    messageId,
    templateId,
    workflowId,
    onChange,
  },
}: WorkflowNodeProps<MessageFormWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = useCallback(
    (newData: Partial<MessageFormWorkflowNodeState>) =>
      onChange({
        state: { ...state, ...newData },
        id: messageId,
        template_id: templateId,
        workflow_id: workflowId,
      }),
    [messageId, onChange, state, templateId, workflowId]
  );

  return useMemo(
    () => (
      <WorkflowBoxForm isEnabled={isEnabled && !state.isDone}>
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
          <WorkflowFieldsForm
            isEnabled={isEnabled && !state.isDone}
            fields={state.template.fields}
            onChange={(values) => handleChange({ values })}
            values={state.values}
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
      state.values,
      state.isDone,
      teamMembers,
      teams,
      handleChange,
    ]
  );
};

export default memo(WorkflowFormNode);
