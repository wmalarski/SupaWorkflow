import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageDecisionWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowBoxForm from "../../workflowForms/WorkflowBoxForm/WorkflowBoxForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";
import WorkflowRadioForm from "../../workflowForms/WorkflowRadioForm/WorkflowRadioForm";
import WorkflowDecisionNodeHandle from "./WorkflowDecisionNodeHandle";

const WorkflowDecisionNode = ({
  data: {
    state,
    teamMembers,
    teams,
    isEnabled,
    workflowId,
    messageId,
    templateId,
    onChange,
  },
}: WorkflowNodeProps<MessageDecisionWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = useCallback(
    (newState: Partial<MessageDecisionWorkflowNodeState>) =>
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
          <WorkflowRadioForm
            isEnabled={isEnabled}
            selected={state.selected}
            options={state.template.routes}
            onChange={(selected) => handleChange({ selected, isDone: true })}
          />
        </VStack>
        {state.template.routes.map((route, index) => (
          <WorkflowDecisionNodeHandle
            key={route}
            count={state.template.routes.length}
            index={index}
          />
        ))}
      </WorkflowBoxForm>
    ),
    [
      isEnabled,
      state.template,
      state.assigneeId,
      state.selected,
      state.isDone,
      teamMembers,
      teams,
      handleChange,
    ]
  );
};

export default WorkflowDecisionNode;
