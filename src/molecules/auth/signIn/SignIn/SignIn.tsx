import { useRouter } from "next/router";
import React from "react";
import { useSignIn } from "services";
import { paths } from "utils";
import SignInView, { SignInViewData } from "../SignInView/SignInView";

export type SignInProps = {
  View?: React.ComponentType<React.ComponentProps<typeof SignInView>>;
};

const SignIn = ({ View = SignInView }: SignInProps): React.ReactElement => {
  const router = useRouter();

  const {
    mutate: signUp,
    error,
    isLoading,
    data: user,
  } = useSignIn({
    onSuccess: () => router.push(paths.dashboard()),
  });

  const handleSubmit = (data: SignInViewData) =>
    signUp({
      email: data.email,
      password: data.password,
    });

  return (
    <View
      user={user}
      error={error}
      isLoading={isLoading}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(SignIn);
