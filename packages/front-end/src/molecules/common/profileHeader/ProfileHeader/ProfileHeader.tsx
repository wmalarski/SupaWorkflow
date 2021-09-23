import { useSignOut } from "@supa-workflow/services";
import { useRouter } from "next/router";
import React from "react";
import { paths } from "utils";
import ProfileHeaderView from "../ProfileHeaderView/ProfileHeaderView";

type ViewProps = React.ComponentProps<typeof ProfileHeaderView>;

export type ProfileHeaderProps = {
  View?: React.ComponentType<ViewProps>;
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
