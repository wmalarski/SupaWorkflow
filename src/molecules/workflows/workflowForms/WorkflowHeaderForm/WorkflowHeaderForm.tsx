import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MessageTemplateNodeData } from "../../../../services/nodes";

export type WorkflowHeaderFormProps = {
  template: MessageTemplateNodeData;
};

const WorkflowHeaderForm = ({
  template: { title, description },
}: WorkflowHeaderFormProps): React.ReactElement => (
  <VStack>
    <Heading size="sm">{title}</Heading>
    <Text fontSize="sm">{description}</Text>
  </VStack>
);

export default WorkflowHeaderForm;
