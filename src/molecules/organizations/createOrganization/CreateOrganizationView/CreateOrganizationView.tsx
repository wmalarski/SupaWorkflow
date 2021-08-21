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
import { Organization } from "../../../../services";
import { useText } from "../../../../utils";
import {
  CreateOrganizationViewData,
  useCreateOrganizationViewOptions,
} from "./CreateOrganizationView.utils";

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
}: CreateOrganizationViewProps): JSX.Element => {
  const text = useText();

  const options = useCreateOrganizationViewOptions();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<CreateOrganizationViewData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addOrganizationHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("addOrganizationName")}</FormLabel>
          <Input {...register("name", options.name)} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>{text("addOrganizationDescription")}</FormLabel>
          <Input {...register("description", options.description)} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button disabled={isLoading} type="submit">
          {text("addOrganizationSubmit")}
        </Button>
      </VStack>
    </form>
  );
};

export default CreateOrganizationView;
