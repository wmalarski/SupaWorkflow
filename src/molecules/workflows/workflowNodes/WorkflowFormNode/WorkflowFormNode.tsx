import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageFormWorkflowNodeState,
  MessageNodeType,
} from "../../../../services/nodes";
import {
  WorkflowNodeData,
  WorkflowNodeProps,
} from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowFormNode = ({
  data: { state, message, onChange },
}: WorkflowNodeProps<WorkflowNodeData>): React.ReactElement | null => {
  if (state.nodeType !== MessageNodeType.Form) return null;

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
        <WorkflowFooterForm
          isDone={state.isDone}
          onChange={(isDone) => handleChange({ isDone })}
        />
      </VStack>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default WorkflowFormNode;
