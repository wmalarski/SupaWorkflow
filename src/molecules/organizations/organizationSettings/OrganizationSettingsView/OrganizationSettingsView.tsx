import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { PostgrestError } from "@supabase/supabase-js";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Organization } from "../../../../services";
import { useText, useTextValidator } from "../../../../utils";

export type OrganizationSettingsViewProps = {
  isLoading: boolean;
  isSuccess: boolean;
  organization: Organization;
  updatedOrganization?: Organization;
  error?: PostgrestError | null;
  onUpdateSubmit: (data: OrganizationSettingsViewData) => void;
  onDeleteSubmit: () => void;
};

export type OrganizationSettingsViewData = {
  name: string;
  description: string;
};

const OrganizationSettingsView = ({
  isLoading,
  isSuccess,
  organization,
  error,
  onUpdateSubmit,
  onDeleteSubmit,
}: OrganizationSettingsViewProps): React.ReactElement => {
  const text = useText();

  const toast = useToast();

  const nameValidator = useTextValidator({
    maxLength: 32,
    minLength: 3,
    required: true,
  });

  useEffect(() => {
    if (!isSuccess) return;
    toast({ title: text("updateOrganizationSuccess") });
  }, [isSuccess, text, toast]);

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<OrganizationSettingsViewData>({
    defaultValues: {
      description: organization.description,
      name: organization.name,
    },
  });

  return (
    <VStack>
      <form onSubmit={handleSubmit(onUpdateSubmit)}>
        <VStack>
          <Heading>{text("updateOrganizationHeader")}</Heading>

          <FormControl isInvalid={!!errors.name}>
            <FormLabel>{text("updateOrganizationName")}</FormLabel>
            <Input {...register("name", nameValidator)} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.description}>
            <FormLabel>{text("updateOrganizationDescription")}</FormLabel>
            <Input {...register("description")} />
            <FormErrorMessage>{errors.description?.message}</FormErrorMessage>
          </FormControl>

          <FormErrorMessage>{error?.message}</FormErrorMessage>

          <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
            {text("updateOrganizationSubmit")}
          </Button>
        </VStack>
      </form>
      <VStack>
        <Heading>{text("deleteOrganizationDescription")}</Heading>
        <Button isLoading={isLoading} onClick={onDeleteSubmit}>
          {text("deleteOrganizationSubmit")}
        </Button>
      </VStack>
    </VStack>
  );
};

export default OrganizationSettingsView;
