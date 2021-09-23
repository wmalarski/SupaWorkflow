import { Heading, Radio, RadioGroup, VStack } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";

export type WorkflowRadioFormProps = {
  selected: number | null;
  options: string[];
  isEnabled: boolean;
  onChange: (value: number | null) => void;
};

const WorkflowRadioForm = ({
  selected,
  options,
  isEnabled,
  onChange,
}: WorkflowRadioFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading size="xs">{text("workflowRadioSelect")}</Heading>
      <RadioGroup
        isDisabled={!isEnabled}
        value={selected ?? undefined}
        onChange={(nextValue) => onChange(Number(nextValue))}
      >
        <VStack>
          {options.map((option, index) => (
            <Radio key={option} size="sm" value={index}>
              {option}
            </Radio>
          ))}
        </VStack>
      </RadioGroup>
    </VStack>
  );
};

export default WorkflowRadioForm;
