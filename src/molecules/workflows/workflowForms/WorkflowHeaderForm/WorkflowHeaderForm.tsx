import { Heading, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { MessageTemplateNodeBaseState } from "../../../../services/nodes";

export type WorkflowHeaderFormProps = {
  template: MessageTemplateNodeBaseState;
};

const WorkflowHeaderForm = ({
  template: { title, description },
}: WorkflowHeaderFormProps): React.ReactElement => {
  console.log(title);
  return (
    <VStack>
      <Heading size="sm">{title}</Heading>
      <Text fontSize="sm">{description}</Text>
    </VStack>
  );
};

export default WorkflowHeaderForm;
