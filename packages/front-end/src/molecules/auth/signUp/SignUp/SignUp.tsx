import { useSignUp } from "@supa-workflow/services";
import { useRouter } from "next/router";
import React from "react";
import { paths } from "utils";
import SignUpView, { SignUpViewProps } from "../SignUpView/SignUpView";

export type SignUpProps = {
  View?: React.ComponentType<SignUpViewProps>;
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

export default React.memo(SignUp);
