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
import { useEmailValidator, useText } from "../../../../utils";

export type AddOrganizationMemberViewData = {
  email: string;
};

export type AddOrganizationMemberViewProps = {
  error: PostgrestError | null;
  isLoading: boolean;
  onSubmit: (data: AddOrganizationMemberViewData) => void;
};

const AddOrganizationMemberView = ({
  error,
  isLoading,
  onSubmit,
}: AddOrganizationMemberViewProps): JSX.Element => {
  const text = useText();

  const {
    formState: { errors, isValid, isDirty },
    register,
    handleSubmit,
  } = useForm<AddOrganizationMemberViewData>();

  const emailValidator = useEmailValidator();

  console.log({ a: !isValid || isDirty, isValid, isDirty, errors });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addOrganizationMemberHeader")}</Heading>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>{text("emailPlaceholder")}</FormLabel>
          <Input type="email" {...register("email", emailValidator)} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button
          isDisabled={!!errors.email || !isDirty}
          isLoading={isLoading}
          type="submit"
        >
          {text("addOrganizationMemberButton")}
        </Button>
      </VStack>
    </form>
  );
};

export default AddOrganizationMemberView;
