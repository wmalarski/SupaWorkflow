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
import { SignInViewData, useSignInViewOptions } from "./SignInView.utils";

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
}: SignInViewProps): JSX.Element => {
  const text = useText();

  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<SignInViewData>();

  const options = useSignInViewOptions();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack>
        <Heading>{text("signInHeader")}</Heading>

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

        <FormErrorMessage>{error?.message}</FormErrorMessage>

        <Button disabled={isLoading} type="submit">
          {text("signInButton")}
        </Button>
      </VStack>
    </form>
  );
};

export default SignInView;
