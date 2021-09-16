import { Heading, StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Position } from "react-flow-renderer";
import { MessageFormTemplateNodeState } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../../templateEditor/TemplateEditorView/TemplateEditorView.types";
import TemplateBoxForm from "../../templateForms/TemplateBoxForm/TemplateBoxForm";
import TemplateDetailsForm from "../../templateForms/TemplateDetailsForm/TemplateDetailsForm";
import TemplateHandle from "../../templateForms/TemplateHandle/TemplateHandle";
import TemplateListForm from "../../templateForms/TemplateListForm/TemplateListForm";
import TemplateTargetForm from "../../templateForms/TemplateTargetForm/TemplateTargetForm";
import TemplateTeamsForm from "../../templateForms/TemplateTeamsForm/TemplateTeamsForm";

const TemplateFormNode = ({
  data: { teams, messageId, state, templateId, onChange },
}: TemplateNodeProps<MessageFormTemplateNodeState>): React.ReactElement | null => {
  const text = useText();

  const handleChange = useCallback(
    (newState: Partial<MessageFormTemplateNodeState>) =>
      onChange({
        state: { ...state, ...newState },
        id: messageId,
        template_id: templateId,
        workflow_id: null,
      }),
    [messageId, onChange, state, templateId]
  );

  return useMemo(
    () => (
      <TemplateBoxForm>
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
      </TemplateBoxForm>
    ),
    [
      handleChange,
      state.description,
      state.fields,
      state.isTargetAll,
      state.teamId,
      state.title,
      teams,
      text,
    ]
  );
};

export default TemplateFormNode;
