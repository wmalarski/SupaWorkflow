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
import useText from "../../../../utils/translations/useText";
import {
  SignUpViewContext,
  SignUpViewData,
  signUpViewResolver,
  useSignUpViewOptions,
} from "./SignUpView.utils";

export type SignUpViewProps = {
  isLoading: boolean;
  error: PostgrestError | null;
  user?: User | null;
  onSubmit: (data: SignUpViewData) => void;
};

const SignUpView = ({
  isLoading,
  error,
  onSubmit,
}: SignUpViewProps): JSX.Element => {
  const text = useText();

  const options = useSignUpViewOptions();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignUpViewData, SignUpViewContext>({
    resolver: signUpViewResolver,
    context: { text },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("signUpHeader")}</Heading>

        <FormControl isInvalid={!!errors.email}>
          <FormLabel>{text("emailPlaceholder")}</FormLabel>
          <Input type="email" {...register("email", options.email)} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.password}>
          <FormLabel>{text("passwordPlaceholder")}</FormLabel>
          <Input type="password" {...register("password", options.password)} />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel>{text("confirmPasswordPlaceholder")}</FormLabel>
          <Input
            type="password"
            {...register("password", options.confirmPassword)}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button disabled={isLoading} type="submit">
          {text("signUpButton")}
        </Button>
      </VStack>
    </form>
  );
};

export default SignUpView;
