import { useRouter } from "next/router";
import React from "react";
import { useSignUp } from "../../../../services/auth/signUp";
import paths from "../../../../utils/routing/paths";
import SignUpView, { SignUpViewProps } from "../SignUpView/SignUpView";

export type SignUpProps = {
  View?: React.ComponentType<SignUpViewProps>;
};

const SignUp = ({ View = SignUpView }: SignUpProps): JSX.Element => {
  const router = useRouter();

  const {
    data,
    mutate: signUp,
    error,
    isLoading,
  } = useSignUp({
    onSuccess: () => router.push(paths.signIn),
  });

  return (
    <View
      error={error}
      isLoading={isLoading}
      user={data}
      onSubmit={(data) =>
        signUp({
          email: data.email,
          password: data.password,
        })
      }
    />
  );
};

export default SignUp;
