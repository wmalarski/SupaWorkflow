import { Checkbox, CheckboxGroup, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useText } from "utils";

export type WorkflowCheckboxesFormProps = {
  checked: number[];
  options: string[];
  isEnabled: boolean;
  onChange: (checked: number[]) => void;
};

const WorkflowCheckboxesForm = ({
  checked,
  isEnabled,
  onChange,
  options,
}: WorkflowCheckboxesFormProps): React.ReactElement => {
  const text = useText();

  const handleChange = (nextValue: (string | number)[]) =>
    onChange(nextValue.map(Number));

  return (
    <VStack>
      <Heading size="xs">{text("workflowRadioSelect")}</Heading>
      <CheckboxGroup
        isDisabled={!isEnabled}
        value={checked.map(String)}
        onChange={handleChange}
      >
        <VStack>
          {options.map((option, index) => (
            <Checkbox key={option} size="sm" value={String(index)}>
              {option}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};

export default WorkflowCheckboxesForm;
