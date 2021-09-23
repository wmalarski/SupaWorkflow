import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Profile } from "@supa-workflow/services";
import { PostgrestError } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { useText, useTextValidator } from "../../../../utils";

export type ProfileSettingsViewData = {
  name: string;
};

export type ProfileSettingsViewProps = {
  isLoading: boolean;
  profile: Profile;
  updatedProfile?: Profile;
  error?: PostgrestError | null;
  onSubmit: (data: ProfileSettingsViewData) => void;
};

const ProfileSettingsView = ({
  isLoading,
  error,
  profile,
  onSubmit,
}: ProfileSettingsViewProps): React.ReactElement => {
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
  } = useForm<ProfileSettingsViewData>({
    defaultValues: { name: profile.name },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("profileSettingsHeader")}</Heading>

        <FormControl isInvalid={!!errors.name}>
          <FormLabel>{text("profileSettingsName")}</FormLabel>
          <Input {...register("name", nameValidator)} />
          <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("profileSettingsSave")}
        </Button>
      </VStack>
    </form>
  );
};

export default ProfileSettingsView;
