import { StackDivider, VStack } from "@chakra-ui/react";
import React, { useCallback, useMemo } from "react";
import { Handle, Position } from "react-flow-renderer";
import { MessageChecklistWorkflowNodeState } from "../../../../services/nodes";
import { WorkflowNodeProps } from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.types";
import WorkflowBoxForm from "../../workflowForms/WorkflowBoxForm/WorkflowBoxForm";
import WorkflowCheckboxesForm from "../../workflowForms/WorkflowCheckboxesForm/WorkflowCheckboxesForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";

const WorkflowChecklistNode = ({
  data: { state, isEnabled, templateId, messageId, workflowId, onChange },
}: WorkflowNodeProps<MessageChecklistWorkflowNodeState>): React.ReactElement | null => {
  const handleChange = useCallback(
    (newState: Partial<MessageChecklistWorkflowNodeState>) =>
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
      <WorkflowBoxForm isEnabled={isEnabled && !state.isDone}>
        <Handle type="target" position={Position.Left} />
        <VStack divider={<StackDivider borderColor="gray.200" />}>
          <WorkflowHeaderForm template={state.template} />
          <WorkflowCheckboxesForm
            isEnabled={isEnabled}
            checked={state.checked}
            onChange={(checked) =>
              handleChange({
                checked,
                isDone: checked.length === state.template.tasks.length,
              })
            }
            options={state.template.tasks}
          />
        </VStack>
        <Handle type="source" position={Position.Right} />
      </WorkflowBoxForm>
    ),
    [isEnabled, state.template, state.checked, state.isDone, handleChange]
  );
};

export default WorkflowChecklistNode;
