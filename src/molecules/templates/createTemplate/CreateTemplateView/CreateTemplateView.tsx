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
import { Template } from "../../../../services";
import { useText } from "../../../../utils";
import {
  CreateTemplateViewData,
  useCreateTemplateViewOptions,
} from "./CreateTemplateView.utils";

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
}: CreateTemplateViewProps): JSX.Element => {
  const text = useText();

  const options = useCreateTemplateViewOptions();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateTemplateViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addTemplateHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("addTemplateName")}</FormLabel>
          <Input {...register("name", options.name)} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>{text("addTemplateDescription")}</FormLabel>
          <Input {...register("description", options.description)} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button disabled={isLoading} type="submit">
          {text("addTemplateSubmit")}
        </Button>
      </VStack>
    </form>
  );
};

export default CreateTemplateView;
