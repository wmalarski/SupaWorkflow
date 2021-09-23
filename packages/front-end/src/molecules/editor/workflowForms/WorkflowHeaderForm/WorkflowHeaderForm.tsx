import { Heading, Text, VStack } from "@chakra-ui/react";
import { MessageTemplateNodeBaseState } from "@supa-workflow/services";
import React from "react";

export type WorkflowHeaderFormProps = {
  template: MessageTemplateNodeBaseState;
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
