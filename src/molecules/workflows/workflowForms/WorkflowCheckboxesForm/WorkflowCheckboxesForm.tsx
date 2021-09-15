import { Checkbox, CheckboxGroup, Heading, VStack } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";

export type WorkflowCheckboxesFormProps = {
  checked: number[];
  options: string[];
  onChange: (checked: number[]) => void;
};

const WorkflowCheckboxesForm = ({
  checked,
  onChange,
  options,
}: WorkflowCheckboxesFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading size="xs">{text("workflowRadioSelect")}</Heading>
      <CheckboxGroup
        value={checked.map(String)}
        onChange={(nextValue) => {
          console.log({ nextValue });
          onChange(nextValue.map(Number));
        }}
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
