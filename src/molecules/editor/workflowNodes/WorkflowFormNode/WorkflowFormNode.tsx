import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageFormWorkflowNodeState } from "../../../../services/nodes";
import NodeBoxForm from "../../nodeForms/NodeBoxForm/NodeBoxForm";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowFieldsForm from "../../workflowForms/WorkflowFieldsForm/WorkflowFieldsForm";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowFormNode = ({
  data: { state, isEnabled, messageId, templateId, workflowId, onChange },
}: WorkflowNodeProps<MessageFormWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = useCallback(
    (newData: Partial<MessageFormWorkflowNodeState>) =>
      onChange({
        state: { ...state, ...newData },
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
          <WorkflowFieldsForm
            isEnabled={isEnabled && !state.isDone}
            fields={state.template.fields}
            onChange={(values) => handleChange({ values })}
            values={state.values}
          />
          <WorkflowFooterForm
            isEnabled={isEnabled}
            isDone={state.isDone}
            onChange={(isDone) => handleChange({ isDone })}
          />
        </VStack>
        <Handle type="source" position={Position.Right} />
      </NodeBoxForm>
    ),
    [isEnabled, state.template, state.values, state.isDone, handleChange]
  );
};

export default WorkflowFormNode;
