import { Box, Heading, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { ListForm } from "../../../../atoms";
import {
  MessageNodeChecklistTemplateData,
  MessageNodeType,
} from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../TemplateEditorView/TemplateEditorView.utils";
import TemplateNodeTeamsForm from "../TemplateNodeTeamsForm/TemplateNodeTeamsForm";
import TemplateTargetForm from "../TemplateTargetForm/TemplateTargetForm";

const TemplateChecklistNode = ({
  data: { teams, message, onChange },
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.ChecklistTemplate
  )
    return null;

  const messageData: MessageNodeChecklistTemplateData = message.data;

  const handleChange = (newData: Partial<MessageNodeChecklistTemplateData>) =>
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
          {text("checklistTemplateNode")}
        </Heading>
        <ListForm
          text={{
            add: text("addTemplateNodeOption"),
            delete: text("deleteTemplateNodeOption"),
            down: text("downTemplateNodeOption"),
            up: text("upTemplateNodeOption"),
          }}
          entries={message.data.tasks}
          onChange={(tasks) => handleChange({ tasks })}
        />
        <TemplateNodeTeamsForm
          teams={teams}
          selected={messageData.teamIds}
          onChange={(teamIds) => handleChange({ teamIds })}
        />
        <TemplateTargetForm
          isTargetAll={messageData.isTargetAll}
          onChange={(isTargetAll: boolean) => handleChange({ isTargetAll })}
        />
      </VStack>
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default TemplateChecklistNode;
