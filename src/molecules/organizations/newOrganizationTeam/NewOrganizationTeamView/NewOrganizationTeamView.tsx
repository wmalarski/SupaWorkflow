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
import { Team } from "services";
import { useText, useTextValidator } from "utils";

export type NewOrganizationTeamViewData = {
  name: string;
  description: string;
  color: string;
};

export type NewOrganizationTeamViewProps = {
  isLoading: boolean;
  error?: PostgrestError | null;
  team?: Team | null;
  onSubmit: (data: NewOrganizationTeamViewData) => void;
};

const NewOrganizationTeamView = ({
  isLoading,
  error,
  onSubmit,
}: NewOrganizationTeamViewProps): React.ReactElement => {
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
  } = useForm<NewOrganizationTeamViewData>({
    defaultValues: { color: "#aa1111" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addTeamHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("addTeamName")}</FormLabel>
          <Input {...register("name", nameValidator)} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.description}>
          <FormLabel>{text("addTeamDescription")}</FormLabel>
          <Input {...register("description")} />
          <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isDisabled isInvalid={!!errors.color}>
          <FormLabel>{text("addTeamColor")}</FormLabel>
          <Input {...register("color")} />
          <FormErrorMessage>{errors.color?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("addTeamSubmit")}
        </Button>
      </VStack>
    </form>
  );
};

export default NewOrganizationTeamView;
