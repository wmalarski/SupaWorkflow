import { HStack } from "@chakra-ui/layout";
import { Checkbox } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";

export type WorkflowFooterFormProps = {
  isDone: boolean;
  isEnabled: boolean;
  onChange: (isDone: boolean) => void;
};

const WorkflowFooterForm = ({
  isDone,
  isEnabled,
  onChange,
}: WorkflowFooterFormProps): React.ReactElement => {
  const text = useText();

  return (
    <HStack>
      <Checkbox
        isChecked={isDone}
        isDisabled={!isEnabled}
        onChange={(event) => onChange(event.target.checked)}
      >
        {text("workflowNodeDone")}
      </Checkbox>
    </HStack>
  );
};

export default WorkflowFooterForm;
