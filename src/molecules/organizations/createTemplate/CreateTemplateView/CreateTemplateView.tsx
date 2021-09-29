import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { Template } from "services";
import { useText, useTextValidator } from "utils";

export type CreateTemplateViewData = {
  name: string;
  description: string;
};

export type CreateTemplateViewProps = {
  isLoading: boolean;
  error?: PostgrestError | null;
  template?: Template | null;
  onSubmit: (data: CreateTemplateViewData) => void;
};

const CreateTemplateView = ({
  isLoading,
  error,
  onSubmit,
}: CreateTemplateViewProps): React.ReactElement => {
  const text = useText();

  const nameValidator = useTextValidator({
    maxLength: 32,
    minLength: 3,
    required: true,
  });

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<CreateTemplateViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addTemplateHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("addTemplateName")}</FormLabel>
          <Input {...register("name", nameValidator)} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>{text("addTemplateDescription")}</FormLabel>
          <Textarea {...register("description")} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("addTemplateSubmit")}
        </Button>
      </VStack>
    </form>
  );
};

export default CreateTemplateView;
