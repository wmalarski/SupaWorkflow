import { useRouter } from "next/router";
import React from "react";
import { useSignOut } from "services";
import { paths } from "utils";
import ProfileHeaderView from "../ProfileHeaderView/ProfileHeaderView";

export type ProfileHeaderProps = {
  View?: React.ComponentType<React.ComponentProps<typeof ProfileHeaderView>>;
};

const ProfileHeader = ({
  View = ProfileHeaderView,
}: ProfileHeaderProps): React.ReactElement => {
  const router = useRouter();

  const { mutate: signOut } = useSignOut({
    onSettled: () => router.push(paths.home),
  });

  return <View onSignOutClicked={signOut} />;
};

export default React.memo(ProfileHeader);
