import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageDecisionWorkflowNodeData,
  MessageKind,
  MessageNodeType,
} from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowDecisionNodeHandle from "./WorkflowDecisionNodeHandle";

const WorkflowDecisionNode = ({
  data: { message },
}: WorkflowNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== MessageKind.WorkflowNode ||
    message.data.datatype !== MessageNodeType.Decision
  )
    return null;

  const messageData: MessageDecisionWorkflowNodeData = message.data;
  const { routes, title, description } = messageData.template;

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
      {routes.map((route, index) => (
        <WorkflowDecisionNodeHandle
          key={route}
          count={routes.length}
          index={index}
        />
      ))}
    </Box>
  );
};

export default WorkflowDecisionNode;
