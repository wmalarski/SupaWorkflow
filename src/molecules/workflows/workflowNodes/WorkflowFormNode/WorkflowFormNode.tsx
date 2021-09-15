import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React, { memo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageFormWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowAssigneeForm from "../../workflowForms/WorkflowAssigneeForm/WorkflowAssigneeForm";
import WorkflowFieldsForm from "../../workflowForms/WorkflowFieldsForm/WorkflowFieldsForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowFormNode = ({
  data: { state, message, team, teamMembers, onChange },
}: WorkflowNodeProps<MessageFormWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = (newData: Partial<MessageFormWorkflowNodeState>) =>
    onChange({
      state: { ...state, ...newData },
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
        <WorkflowFieldsForm
          fields={state.template.fields}
          onChange={(values) => handleChange({ values })}
          values={state.values}
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

export default memo(WorkflowFormNode);
