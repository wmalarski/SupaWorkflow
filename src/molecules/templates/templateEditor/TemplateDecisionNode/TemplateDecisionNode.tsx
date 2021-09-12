import { Box, Heading } from "@chakra-ui/layout";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import { ListForm } from "../../../../atoms";
import { AfterRendererProps } from "../../../../atoms/ListForm/ListForm";
import { MessageNodeType } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../TemplateEditorView/TemplateEditorView.utils";

const TemplateDecisionNodeHandle = ({
  index,
}: AfterRendererProps): React.ReactElement | null => (
  <Handle
    type="source"
    position={Position.Right}
    id={String(index)}
    style={{ top: 50 + index * 32 }}
  />
);

const TemplateDecisionNode = ({
  data,
  selected,
}: TemplateNodeProps): React.ReactElement | null => {
  const text = useText();

  const { message, onChange } = data;

  if (
    message.data.kind !== "node" ||
    message.data.datatype !== MessageNodeType.DecisionTemplate
  )
    return null;

  const handleValid = (routes: string[]) =>
    onChange({
      data: {
        ...message.data,
        datatype: MessageNodeType.DecisionTemplate,
        routes,
      },
      id: message.id,
      template_id: message.template_id,
      workflow_id: message.workflow_id,
    });

  return (
    <Box
      bg="white"
      border="solid"
      borderWidth={selected ? 2 : 1}
      borderColor="black"
      borderRadius={5}
      padding={2}
    >
      <Handle type="target" position={Position.Left} />
      <Heading size="sm" p={2}>
        {text("decisionTemplateNode")}
      </Heading>
      <ListForm
        text={{
          add: text("addTemplateNodeOption"),
          delete: text("deleteTemplateNodeOption"),
          down: text("downTemplateNodeOption"),
          save: text("saveTemplateNode"),
          up: text("upTemplateNodeOption"),
        }}
        entries={message.data.routes}
        onChange={handleValid}
        AfterRenderer={TemplateDecisionNodeHandle}
      />
    </Box>
  );
};

export default TemplateDecisionNode;
