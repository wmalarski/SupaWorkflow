import { Input } from "@chakra-ui/input";
import { GridItem, Heading, VStack } from "@chakra-ui/layout";
import { Grid, Text } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";

export type WorkflowFieldsFormProps = {
  values: Record<number, string>;
  fields: string[];
  isEnabled: boolean;
  onChange: (value: Record<number, string>) => void;
};

const WorkflowFieldsForm = ({
  fields,
  isEnabled,
  onChange,
  values,
}: WorkflowFieldsFormProps): React.ReactElement => {
  const text = useText();

  return (
    <VStack>
      <Heading size="xs">{text("workflowNodeFields")}</Heading>
      <Grid templateColumns="1fr auto" gap={2}>
        {fields.map((field, index) => (
          <React.Fragment key={field}>
            <GridItem alignContent="center">
              <Text fontSize="sm">{field}</Text>
            </GridItem>
            <GridItem>
              <Input
                size="sm"
                isDisabled={!isEnabled}
                value={values[index] ?? ""}
                onChange={(event) =>
                  onChange({ ...values, [index]: event.target.value })
                }
              />
            </GridItem>
          </React.Fragment>
        ))}
      </Grid>
    </VStack>
  );
};

export default WorkflowFieldsForm;
