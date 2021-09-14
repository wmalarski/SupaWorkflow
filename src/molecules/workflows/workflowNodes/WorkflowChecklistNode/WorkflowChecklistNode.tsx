import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageChecklistWorkflowNodeData,
  MessageKind,
  MessageNodeType,
} from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowChecklistNode = ({
  data: { message, onChange },
}: WorkflowNodeProps): React.ReactElement | null => {
  if (
    message.data.kind !== MessageKind.WorkflowNode ||
    message.data.datatype !== MessageNodeType.Checklist
  )
    return null;

  const messageData: MessageChecklistWorkflowNodeData = message.data;

  const handleChange = (newData: Partial<MessageChecklistWorkflowNodeData>) =>
    onChange({
      data: { ...messageData, ...newData },
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
        <WorkflowHeaderForm template={messageData.template} />
        <WorkflowFooterForm
          isDone={messageData.isDone}
          onChange={(isDone) => handleChange({ isDone })}
        />
      </VStack>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default WorkflowChecklistNode;
