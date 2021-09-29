import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Heading, VStack } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/react";
import React from "react";
import { useText } from "utils";

export type TemplateTargetFormProps = {
  isTargetAll: boolean;
  onChange: (isTargetAll: boolean) => void;
};

const TemplateTargetForm = ({
  isTargetAll,
  onChange,
}: TemplateTargetFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading size="xs">{text("targetTemplateNode")}</Heading>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="is-target-all" mb="0" fontSize="sm">
          {text("targetAllTemplateNode")}
        </FormLabel>
        <Switch
          id="is-target-all"
          isChecked={isTargetAll}
          onChange={(event) => onChange(event.target.checked)}
        />
      </FormControl>
    </VStack>
  );
};

export default TemplateTargetForm;
