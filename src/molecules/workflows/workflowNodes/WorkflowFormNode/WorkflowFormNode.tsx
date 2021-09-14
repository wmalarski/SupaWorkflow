import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageFormWorkflowNodeData,
  MessageKind,
  MessageNodeType,
} from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";

const WorkflowFormNode = ({
  data: { message },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== MessageKind.WorkflowNode ||
    message.data.datatype !== MessageNodeType.Form
  )
    return null;

  const messageData: MessageFormWorkflowNodeData = message.data;
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

export default WorkflowFormNode;
