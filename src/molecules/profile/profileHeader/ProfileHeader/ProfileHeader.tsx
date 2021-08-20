import React from "react";
import ProfileHeaderView from "../ProfileHeaderView/ProfileHeaderView";

type ViewProps = React.ComponentProps<typeof ProfileHeaderView>;

export type ProfileHeaderProps = {
  View?: React.ComponentType<ViewProps>;
};

const ProfileHeader = ({
  View = ProfileHeaderView,
}: ProfileHeaderProps): JSX.Element => {
  return <View data="" />;
};

export default ProfileHeader;
