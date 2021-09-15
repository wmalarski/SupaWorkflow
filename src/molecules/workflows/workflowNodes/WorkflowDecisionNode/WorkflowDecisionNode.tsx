import { Box, StackDivider, VStack } from "@chakra-ui/react";
import React from "react";
import { Handle, Position } from "react-flow-renderer";
import {
  MessageDecisionWorkflowNodeData,
  MessageNodeType,
} from "../../../../services/nodes";
import {
  WorkflowNodeData,
  WorkflowNodeProps,
} from "../../workflowEditor/WorkflowEditorView/WorkflowEditorView.utils";
import WorkflowFooterForm from "../../workflowForms/WorkflowFooterForm/WorkflowFooterForm";
import WorkflowHeaderForm from "../../workflowForms/WorkflowHeaderForm/WorkflowHeaderForm";
import WorkflowDecisionNodeHandle from "./WorkflowDecisionNodeHandle";

const WorkflowDecisionNode = ({
  data: { message, data, onChange },
}: WorkflowNodeProps<WorkflowNodeData>): React.ReactElement | null => {
  if (data.datatype !== MessageNodeType.Decision) return null;

  const handleChange = (newData: Partial<MessageDecisionWorkflowNodeData>) =>
    onChange({
      data: { ...data, ...newData },
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
        <WorkflowHeaderForm template={data.template} />
        <WorkflowFooterForm
          isDone={data.isDone}
          onChange={(isDone) => handleChange({ isDone })}
        />
      </VStack>
      {data.template.routes.map((route, index) => (
        <WorkflowDecisionNodeHandle
          key={route}
          count={data.template.routes.length}
          index={index}
        />
      ))}
    </Box>
  );
};

export default WorkflowDecisionNode;
