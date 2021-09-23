import { useSignOut } from "@supa-workflow/services";
import { useRouter } from "next/router";
import React from "react";
import { paths } from "utils";
import SignOutView, { SignOutViewProps } from "../SignOutView/SignOutView";

export type SignOutProps = {
  View?: React.ComponentType<SignOutViewProps>;
};

const SignOut = ({ View = SignOutView }: SignOutProps): React.ReactElement => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => router.push(paths.home),
  });

  return <View onSignOutClicked={signOut} />;
};

export default React.memo(SignOut);
