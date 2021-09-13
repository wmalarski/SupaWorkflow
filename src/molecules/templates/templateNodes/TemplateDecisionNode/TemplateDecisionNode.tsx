import { Box, Heading } from "@chakra-ui/layout";
import { StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageNodeDecisionTemplateData,
  MessageNodeType,
} from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../../templateEditor/TemplateEditorView/TemplateEditorView.utils";
import TemplateDetailsForm from "../../templateForms/TemplateDetailsForm/TemplateDetailsForm";
import TemplateListForm from "../../templateForms/TemplateListForm/TemplateListForm";
import TemplateTargetForm from "../../templateForms/TemplateTargetForm/TemplateTargetForm";
import TemplateTeamsForm from "../../templateForms/TemplateTeamsForm/TemplateTeamsForm";
import TemplateDecisionNodeHandle from "./TemplateDecisionNodeHandle";

const TemplateDecisionNode = ({
  data: { teams, message, onChange },
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.DecisionTemplate
  )
    return null;

  const messageData: MessageNodeDecisionTemplateData = message.data;

  const handleChange = (newData: Partial<MessageNodeDecisionTemplateData>) =>
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
        <Heading size="sm" p={2}>
          {text("decisionTemplateNode")}
        </Heading>
        <TemplateDetailsForm
          description={messageData.description}
          title={messageData.title}
          onChange={(update) => handleChange(update)}
        />
        <TemplateListForm
          heading={text("decisionsTemplateNode")}
          entries={message.data.routes}
          onChange={(routes) => handleChange({ routes })}
          AfterRenderer={TemplateDecisionNodeHandle}
        />
        <TemplateTeamsForm
          teams={teams}
          selected={messageData.teamIds}
          onChange={(teamIds) => handleChange({ teamIds })}
        />
        <TemplateTargetForm
          isTargetAll={messageData.isTargetAll}
          onChange={(isTargetAll: boolean) => handleChange({ isTargetAll })}
        />
      </VStack>
    </Box>
  );
};

export default TemplateDecisionNode;
