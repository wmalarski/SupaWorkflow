import { PostgrestError, User } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Debug, Text, TextField } from "../../../../atoms";
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
  user,
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
      <Text>{text("signUpHeader")}</Text>
      <TextField
        type="email"
        placeholder={text("emailPlaceholder")}
        {...register("email", options.email)}
      />
      {errors.email && <Alert variant="red">{errors.email.message}</Alert>}
      <TextField
        type="password"
        placeholder={text("passwordPlaceholder")}
        {...register("password", options.password)}
      />
      {errors.password && (
        <Alert variant="red">{errors.password.message}</Alert>
      )}
      <TextField
        type="password"
        placeholder={text("confirmPasswordPlaceholder")}
        {...register("confirmPassword", options.confirmPassword)}
      />
      {errors.confirmPassword && (
        <Alert variant="red">{errors.confirmPassword.message}</Alert>
      )}
      {error && <Alert variant="red">{error.message}</Alert>}
      <Button disabled={isLoading} type="submit">
        {text("signUpButton")}
      </Button>
      <Debug value={user} />
    </form>
  );
};

export default SignUpView;
