import React from "react";
import { useSignIn } from "../../../../services/auth/signIn";
import SignInView, { SignInViewProps } from "../SignInView/SignInView";

export type SignInProps = {
  View?: React.ComponentType<SignInViewProps>;
};

const SignIn = ({ View = SignInView }: SignInProps): JSX.Element => {
  const { mutate: signUp, error, isLoading, data: user } = useSignIn();

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
