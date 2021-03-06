import { useRouter } from "next/router";
import React from "react";
import { useSignUp } from "services";
import { paths } from "utils";
import SignUpView, { SignUpViewData } from "../SignUpView/SignUpView";

export type SignUpProps = {
  View?: React.ComponentType<React.ComponentProps<typeof SignUpView>>;
};

const SignUp = ({ View = SignUpView }: SignUpProps): React.ReactElement => {
  const router = useRouter();

  const {
    data,
    mutate: signUp,
    error,
    isLoading,
  } = useSignUp({
    onSuccess: () => router.push(paths.signIn),
  });

  const handleSubmit = (data: SignUpViewData) =>
    signUp({
      email: data.email,
      password: data.password,
    });

  return (
    <View
      error={error}
      isLoading={isLoading}
      user={data}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(SignUp);
