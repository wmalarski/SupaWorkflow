import { Box, Heading } from "@chakra-ui/layout";
import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Position } from "react-flow-renderer";
import { MessageDecisionTemplateNodeState } from "../../../../services/nodes";
import { useText } from "../../../../utils";
import { TemplateNodeProps } from "../../templateEditor/TemplateEditorView/TemplateEditorView.utils";
import TemplateDetailsForm from "../../templateForms/TemplateDetailsForm/TemplateDetailsForm";
import TemplateHandle from "../../templateForms/TemplateHandle/TemplateHandle";
import TemplateListForm from "../../templateForms/TemplateListForm/TemplateListForm";
import TemplateTargetForm from "../../templateForms/TemplateTargetForm/TemplateTargetForm";
import TemplateTeamsForm from "../../templateForms/TemplateTeamsForm/TemplateTeamsForm";
import TemplateDecisionNodeHandle from "./TemplateDecisionNodeHandle";

const TemplateDecisionNode = ({
  data: { teams, messageId, templateId, state, onChange },
}: TemplateNodeProps<MessageDecisionTemplateNodeState>): React.ReactElement | null => {
  const text = useText();

  const handleChange = useCallback(
    (newState: Partial<MessageDecisionTemplateNodeState>) =>
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
            {text("decisionTemplateNode")}
          </Heading>
          <TemplateDetailsForm
            description={state.description}
            title={state.title}
            onChange={(update) => handleChange(update)}
          />
          <TemplateListForm
            heading={text("decisionsTemplateNode")}
            entries={state.routes}
            onChange={(routes) => handleChange({ routes })}
            AfterRenderer={TemplateDecisionNodeHandle}
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
      </Box>
    ),
    [
      handleChange,
      state.description,
      state.isTargetAll,
      state.routes,
      state.teamId,
      state.title,
      teams,
      text,
    ]
  );
};

export default TemplateDecisionNode;
