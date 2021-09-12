import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { ListForm } from "../../../../atoms";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../TemplateEditorView/TemplateEditorView.types";

const TemplateFormNode = ({
  data,
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  const { message, onChange } = data;

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.FormTemplate
  )
    return null;

  const handleValid = (fields: string[]) =>
    onChange({
      data: {
        ...message.data,
        datatype: MessageNodeType.FormTemplate,
        fields,
      },
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
      <Heading size="sm" p={2}>
        {text("formTemplateNode")}
      </Heading>
      <ListForm
        text={{
          add: text("addTemplateNodeOption"),
          delete: text("deleteTemplateNodeOption"),
          down: text("downTemplateNodeOption"),
          save: text("saveTemplateNode"),
          up: text("upTemplateNodeOption"),
        }}
        entries={message.data.fields}
        onChange={handleValid}
      />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
};

export default TemplateFormNode;
