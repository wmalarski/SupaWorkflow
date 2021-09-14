import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageChecklistWorkflowNodeData,
  MessageKind,
  MessageNodeType,
} from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";

const WorkflowChecklistNode = ({
  data: { message },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== MessageKind.WorkflowNode ||
    message.data.datatype !== MessageNodeType.Checklist
  )
    return null;

  const messageData: MessageChecklistWorkflowNodeData = message.data;
  const { title, description } = messageData.template;

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
      <VStack>
        <Heading>{title}</Heading>
        <Text>{description}</Text>
      </VStack>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default WorkflowChecklistNode;
