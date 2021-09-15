import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageDecisionWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";
import WorkflowRadioForm from "../../workflowForms/WorkflowRadioForm/WorkflowRadioForm";
import WorkflowDecisionNodeHandle from "./WorkflowDecisionNodeHandle";

const WorkflowDecisionNode = ({
  data: {
    state,
    teamMembers,
    team,
    workflowId,
    messageId,
    templateId,
    onChange,
  },
}: WorkflowNodeProps<MessageDecisionWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = (newState: Partial<MessageDecisionWorkflowNodeState>) =>
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
        <WorkflowRadioForm
          selected={state.selected}
          options={state.template.routes}
          onChange={(selected) => handleChange({ selected })}
        />
        <WorkflowFooterForm
          isDone={state.isDone}
          onChange={(isDone) => handleChange({ isDone })}
        />
      </VStack>
      {state.template.routes.map((route, index) => (
        <WorkflowDecisionNodeHandle
          key={route}
          count={state.template.routes.length}
          index={index}
        />
      ))}
    </Box>
  );
};

export default WorkflowDecisionNode;
