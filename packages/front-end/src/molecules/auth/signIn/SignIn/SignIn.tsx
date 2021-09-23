import { useSignIn } from "@supa-workflow/services";
import { useRouter } from "next/router";
import React from "react";
import { paths } from "../../../../utils";
import SignInView, { SignInViewProps } from "../SignInView/SignInView";

export type SignInProps = {
  View?: React.ComponentType<SignInViewProps>;
};

const SignIn = ({ View = SignInView }: SignInProps): React.ReactElement => {
  const router = useRouter();

  const {
    mutate: signUp,
    error,
    isLoading,
    data: user,
  } = useSignIn({
    onSuccess: () => router.push(paths.dashboard(null)),
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

export default React.memo(SignIn);
