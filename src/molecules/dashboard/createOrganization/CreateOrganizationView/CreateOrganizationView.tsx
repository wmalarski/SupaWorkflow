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
import { Organization } from "services";
import { useText, useTextValidator } from "utils";

export type CreateOrganizationViewData = {
  name: string;
  description: string;
};

export type CreateOrganizationViewProps = {
  isLoading: boolean;
  error?: PostgrestError | null;
  organization?: Organization | null;
  onSubmit: (data: CreateOrganizationViewData) => void;
};

const CreateOrganizationView = ({
  isLoading,
  error,
  onSubmit,
}: CreateOrganizationViewProps): React.ReactElement => {
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
  } = useForm<CreateOrganizationViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addOrganizationHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("addOrganizationName")}</FormLabel>
          <Input
            {...register("name", nameValidator)}
            placeholder={text("addOrganizationName")}
          />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>{text("addOrganizationDescription")}</FormLabel>
          <Textarea
            {...register("description")}
            placeholder={text("addOrganizationDescription")}
          />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("addOrganizationSubmit")}
        </Button>
      </VStack>
    </form>
  );
};

export default CreateOrganizationView;
