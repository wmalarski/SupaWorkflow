import { PostgrestError, User } from "@supabase/supabase-js";
import React from "react";
import { useForm } from "react-hook-form";
import { Alert, Button, Text, TextField } from "../../../../atoms";
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
      <Text>{text("signInHeader")}</Text>
      <TextField
        placeholder={text("emailPlaceholder")}
        type="email"
        {...register("email", options.email)}
      />
      {errors.email && <Alert variant="red">{errors.email.message}</Alert>}
      <TextField
        placeholder={text("passwordPlaceholder")}
        type="password"
        {...register("password", options.password)}
      />
      {errors.password && (
        <Alert variant="red">{errors.password.message}</Alert>
      )}
      {error && <Alert variant="red">{error.message}</Alert>}
      <Button disabled={isLoading} type="submit">
        {text("signInButton")}
      </Button>
    </form>
  );
};

export default SignInView;
