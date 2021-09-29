import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { Workflow } from "services";
import { useText, useTextValidator } from "utils";

export type CreateWorkflowViewData = {
  name: string;
  description: string;
};

export type CreateWorkflowViewProps = {
  workflow?: Workflow | null;
  error?: PostgrestError | null;
  isLoading?: boolean;
  onSubmit: (data: CreateWorkflowViewData) => void;
};

const CreateWorkflowView = ({
  error,
  isLoading,
  onSubmit,
}: CreateWorkflowViewProps): React.ReactElement => {
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
  } = useForm<CreateWorkflowViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addWorkflowHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("addWorkflowName")}</FormLabel>
          <Input {...register("name", nameValidator)} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>{text("addWorkflowDescription")}</FormLabel>
          <Input {...register("description")} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("addWorkflowSubmit")}
        </Button>
      </VStack>
    </form>
  );
};

export default CreateWorkflowView;
