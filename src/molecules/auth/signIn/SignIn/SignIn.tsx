import { useRouter } from "next/router";
import React from "react";
import { useSignIn } from "../../../../services/auth/signIn";
import paths from "../../../../utils/routing/paths";
import SignInView, { SignInViewProps } from "../SignInView/SignInView";

export type SignInProps = {
  View?: React.ComponentType<SignInViewProps>;
};

const SignIn = ({ View = SignInView }: SignInProps): JSX.Element => {
  const router = useRouter();

  const {
    mutate: signUp,
    error,
    isLoading,
    data: user,
  } = useSignIn({
    onSuccess: () => router.push(paths.home),
  });

  return (
    <View
      user={user}
      error={error}
      isLoading={isLoading}
      onSubmit={(data) =>
        signUp({
          email: data.email,
          password: data.password,
        })
      }
    />
  );
};

export default SignIn;
