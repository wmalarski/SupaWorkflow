import React from "react";
import { useProfileContext, useUpdateProfile } from "services";
import ProfileSettingsView, {
  ProfileSettingsViewData,
} from "../ProfileSettingsView/ProfileSettingsView";

export type ProfileSettingsProps = {
  View?: React.ComponentType<React.ComponentProps<typeof ProfileSettingsView>>;
};

const ProfileSettings = ({
  View = ProfileSettingsView,
}: ProfileSettingsProps): React.ReactElement => {
  const profile = useProfileContext();

  const {
    mutate: updateProfile,
    data: updatedProfile,
    isLoading,
    error,
  } = useUpdateProfile();

  const handleSubmit = (data: ProfileSettingsViewData) =>
    updateProfile({
      id: profile.id,
      name: data.name,
    });

  return (
    <View
      isLoading={isLoading}
      profile={profile}
      updatedProfile={updatedProfile}
      error={error}
      onSubmit={handleSubmit}
    />
  );
};

export default React.memo(ProfileSettings);
