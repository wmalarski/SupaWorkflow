import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageDecisionWorkflowNodeState } from "services";
import NodeBoxForm from "../../nodeForms/NodeBoxForm/NodeBoxForm";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";
import WorkflowRadioForm from "../../workflowForms/WorkflowRadioForm/WorkflowRadioForm";
import WorkflowDecisionNodeHandle from "./WorkflowDecisionNodeHandle";

const WorkflowDecisionNode = ({
  data: { state, isEnabled, workflowId, messageId, templateId, onChange },
}: WorkflowNodeProps<MessageDecisionWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = useCallback(
    (newState: Partial<MessageDecisionWorkflowNodeState>) =>
      onChange({
        state: { ...state, ...newState },
        id: messageId,
        template_id: templateId,
        workflow_id: workflowId,
      }),
    [messageId, onChange, state, templateId, workflowId]
  );

  return useMemo(
    () => (
      <NodeBoxForm>
        <Handle type="target" position={Position.Left} />
        <VStack divider={<StackDivider borderColor="gray.200" />}>
          <WorkflowHeaderForm template={state.template} />
          <WorkflowRadioForm
            isEnabled={isEnabled}
            selected={state.selected}
            options={state.template.routes}
            onChange={(selected) => handleChange({ selected, isDone: true })}
          />
        </VStack>
        {state.template.routes.map((route, index) => (
          <WorkflowDecisionNodeHandle
            key={route}
            count={state.template.routes.length}
            index={index}
          />
        ))}
      </NodeBoxForm>
    ),
    [isEnabled, state.template, state.selected, handleChange]
  );
};

export default WorkflowDecisionNode;
