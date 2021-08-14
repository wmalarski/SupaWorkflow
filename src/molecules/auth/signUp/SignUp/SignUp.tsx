import React from "react";
import { useSignUp } from "../../../../services/auth/signUp";
import SignUpView, { SignUpViewProps } from "../SignUpView/SignUpView";

export type SignUpProps = {
  View?: React.ComponentType<SignUpViewProps>;
};

const SignUp = ({ View = SignUpView }: SignUpProps): JSX.Element => {
  const { data, mutate: signUp, error, isLoading } = useSignUp();

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
