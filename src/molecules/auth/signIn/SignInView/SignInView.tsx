import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { PostgrestError, User } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { useEmailValidator, usePasswordValidator, useText } from "utils";

export type SignInViewData = {
  email: string;
  password: string;
};

export type SignInViewProps = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignInViewData) => void;
};

const SignInView = ({
  isLoading,
  error,
  onSubmit,
}: SignInViewProps): React.ReactElement => {
  const text = useText();

  const {
    formState: { errors, isDirty },
    register,
    handleSubmit,
  } = useForm<SignInViewData>();

  const emailValidator = useEmailValidator();
  const passwordValidator = usePasswordValidator();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("signInHeader")}</Heading>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>{text("emailPlaceholder")}</FormLabel>
          <Input type="email" {...register("email", emailValidator)} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>{text("passwordPlaceholder")}</FormLabel>
          <Input type="password" {...register("password", passwordValidator)} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button isDisabled={!isDirty} isLoading={isLoading} type="submit">
          {text("signInButton")}
        </Button>
      </VStack>
    </form>
  );
};

export default SignInView;
