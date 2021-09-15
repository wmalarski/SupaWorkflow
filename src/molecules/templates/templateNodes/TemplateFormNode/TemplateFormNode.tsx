import { Box, Heading, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Position } from "react-flow-renderer";
import { MessageFormTemplateNodeState } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../../templateEditor/TemplateEditorView/TemplateEditorView.utils";
import TemplateDetailsForm from "../../templateForms/TemplateDetailsForm/TemplateDetailsForm";
import TemplateHandle from "../../templateForms/TemplateHandle/TemplateHandle";
import TemplateListForm from "../../templateForms/TemplateListForm/TemplateListForm";
import TemplateTargetForm from "../../templateForms/TemplateTargetForm/TemplateTargetForm";
import TemplateTeamsForm from "../../templateForms/TemplateTeamsForm/TemplateTeamsForm";

const TemplateFormNode = ({
  data: { teams, messageId, state, templateId, onChange },
}: TemplateNodeProps<MessageFormTemplateNodeState>): React.ReactElement | null => {
  const text = useText();

  const handleChange = (newState: Partial<MessageFormTemplateNodeState>) =>
    onChange({
      state: { ...state, ...newState },
      id: messageId,
      template_id: templateId,
      workflow_id: null,
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
          description={state.description}
          title={state.title}
          onChange={(update) => handleChange(update)}
        />
        <TemplateListForm
          heading={text("fieldsTemplateNode")}
          entries={state.fields}
          onChange={(fields) => handleChange({ fields })}
        />
        <TemplateTeamsForm
          teams={teams}
          selected={state.teamId}
          onChange={(teamId) => handleChange({ teamId })}
        />
        <TemplateTargetForm
          isTargetAll={state.isTargetAll}
          onChange={(isTargetAll: boolean) => handleChange({ isTargetAll })}
        />
      </VStack>
      <TemplateHandle type="source" position={Position.Right} />
    </Box>
  );
};

export default TemplateFormNode;
