import { useRouter } from "next/router";
import React from "react";
import { useSignOut } from "../../../../services/auth/signOut";
import SignOutView, { SignOutViewProps } from "../SignOutView/SignOutView";

export type SignOutProps = {
  View?: React.ComponentType<SignOutViewProps>;
};

const SignOut = ({ View = SignOutView }: SignOutProps): JSX.Element => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => router.push("/"),
  });

  return <View onSignOutClicked={signOut} />;
};

export default SignOut;
