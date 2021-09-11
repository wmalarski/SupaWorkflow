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
import {
  confirmPasswordResolver,
  useEmailValidator,
  usePasswordValidator,
  useText,
  UseTextFnc,
} from "../../../../utils";

export type SignUpViewProps = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignUpViewData) => void;
};

export type SignUpViewData = {
  email: string;
  password: string;
  confirmPassword: string;
};

export type SignUpViewContext = {
  text: UseTextFnc;
};

const SignUpView = ({
  isLoading,
  error,
  onSubmit,
}: SignUpViewProps): React.ReactElement => {
  const text = useText();

  const emailValidator = useEmailValidator();
  const passwordValidator = usePasswordValidator();

  const {
    formState: { errors, isDirty, isValid },
    register,
    handleSubmit,
  } = useForm<SignUpViewData, SignUpViewContext>({
    resolver: confirmPasswordResolver,
    context: { text },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("signUpHeader")}</Heading>

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

        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel>{text("confirmPasswordPlaceholder")}</FormLabel>
          <Input type="password" {...register("password", passwordValidator)} />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button
          isDisabled={!isValid || !isDirty}
          isLoading={isLoading}
          type="submit"
        >
          {text("signUpButton")}
        </Button>
      </VStack>
    </form>
  );
};

export default SignUpView;
