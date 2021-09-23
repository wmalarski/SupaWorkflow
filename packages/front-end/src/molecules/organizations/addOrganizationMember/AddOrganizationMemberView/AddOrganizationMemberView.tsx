import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  VStack,
} from "@chakra-ui/react";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { OrganizationRole } from "../../../../services";
import { useEmailValidator, useText } from "../../../../utils";

export type AddOrganizationMemberViewData = {
  email: string;
  role: OrganizationRole;
};

export type AddOrganizationMemberViewProps = {
  error?: PostgrestError | null;
  isLoading?: boolean;
  onSubmit: (data: AddOrganizationMemberViewData) => void;
};

const AddOrganizationMemberView = ({
  error,
  isLoading,
  onSubmit,
}: AddOrganizationMemberViewProps): React.ReactElement => {
  const text = useText();

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<AddOrganizationMemberViewData>();

  const emailValidator = useEmailValidator();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("addOrganizationMemberHeader")}</Heading>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>{text("emailPlaceholder")}</FormLabel>
          <Input type="email" {...register("email", emailValidator)} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.role}>
          <FormLabel>{text("addOrganizationMemberRole")}</FormLabel>

          <Select {...register("role")}>
            <option value="mod">{text("organizationMemberMod")}</option>
            <option value="user">{text("organizationMemberUser")}</option>
            <option value="guest">{text("organizationMemberGuest")}</option>
          </Select>
          <FormErrorMessage>{errors.role?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("addOrganizationMemberButton")}
        </Button>
      </VStack>
    </form>
  );
};

export default AddOrganizationMemberView;
