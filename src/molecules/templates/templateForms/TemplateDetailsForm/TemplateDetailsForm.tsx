import { Grid, GridItem, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useText } from "../../../../utils";

export type TemplateDetailsFormData = {
  title: string;
  description: string;
};

export type TemplateDetailsFormProps = {
  title: string;
  description: string;
  onChange: (data: TemplateDetailsFormData) => void;
};

const TemplateDetailsForm = ({
  description,
  onChange,
  title,
}: TemplateDetailsFormProps): React.ReactElement => {
  const text = useText();

  const { register, handleSubmit } = useForm<TemplateDetailsFormData>({
    defaultValues: { description, title },
    mode: "onChange",
  });

  return (
    <form onChange={handleSubmit(onChange)}>
      <Grid templateColumns="1fr auto" gap={2}>
        <GridItem>
          <Text fontSize="xs">{text("titleTemplateNode")}</Text>
        </GridItem>
        <GridItem>
          <Input
            size="xs"
            placeholder={text("titleTemplateNode")}
            {...register("title")}
          />
        </GridItem>
        <GridItem>
          <Text fontSize="xs">{text("descriptionTemplateNode")}</Text>
        </GridItem>
        <GridItem>
          <Input
            size="xs"
            placeholder={text("descriptionTemplateNode")}
            {...register("description")}
          />
        </GridItem>
      </Grid>
    </form>
  );
};

export default TemplateDetailsForm;
