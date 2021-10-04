import { useRouter } from "next/router";
import React from "react";
import { useSignOut } from "services";
import { paths } from "utils";
import SignOutView from "../SignOutView/SignOutView";

export type SignOutProps = {
  View?: React.ComponentType<React.ComponentProps<typeof SignOutView>>;
};

const SignOut = ({ View = SignOutView }: SignOutProps): React.ReactElement => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => router.push(paths.home),
  });

  return <View onSignOutClicked={signOut} />;
};

export default React.memo(SignOut);
