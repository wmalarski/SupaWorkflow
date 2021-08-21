import { useRouter } from "next/router";
import React from "react";
import { useSignIn } from "../../../../services";
import { paths } from "../../../../utils";
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
    onSuccess: () => router.push(paths.organizations),
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
