import { Box, Heading, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Position } from "react-flow-renderer";
import {
  MessageFormTemplateNodeData,
  MessageKind,
  MessageNodeType,
} from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../../templateEditor/TemplateEditorView/TemplateEditorView.utils";
import TemplateDetailsForm from "../../templateForms/TemplateDetailsForm/TemplateDetailsForm";
import TemplateHandle from "../../templateForms/TemplateHandle/TemplateHandle";
import TemplateListForm from "../../templateForms/TemplateListForm/TemplateListForm";
import TemplateTargetForm from "../../templateForms/TemplateTargetForm/TemplateTargetForm";
import TemplateTeamsForm from "../../templateForms/TemplateTeamsForm/TemplateTeamsForm";

const TemplateFormNode = ({
  data: { teams, message, onChange },
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== MessageKind.TemplateNode ||
    message.data.datatype !== MessageNodeType.Form
  )
    return null;

  const messageData: MessageFormTemplateNodeData = message.data;

  const handleChange = (newData: Partial<MessageFormTemplateNodeData>) =>
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
      <TemplateHandle type="target" position={Position.Left} />
      <VStack divider={<StackDivider borderColor="gray.200" />}>
        <Heading size="sm" p={2}>
          {text("formTemplateNode")}
        </Heading>
        <TemplateDetailsForm
          description={messageData.description}
          title={messageData.title}
          onChange={(update) => handleChange(update)}
        />
        <TemplateListForm
          heading={text("fieldsTemplateNode")}
          entries={messageData.fields}
          onChange={(fields) => handleChange({ fields })}
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
      <TemplateHandle type="source" position={Position.Right} />
    </Box>
  );
};

export default TemplateFormNode;
