import React from "react";
import { useUpdateProfile } from "services";
import { useProfileContext } from "utils";
import ProfileSettingsView from "../ProfileSettingsView/ProfileSettingsView";

type ViewProps = React.ComponentProps<typeof ProfileSettingsView>;

export type ProfileSettingsProps = {
  View?: React.ComponentType<ViewProps>;
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

  return (
    <View
      isLoading={isLoading}
      profile={profile}
      updatedProfile={updatedProfile}
      error={error}
      onSubmit={(data) =>
        updateProfile({
          id: profile.id,
          name: data.name,
        })
      }
    />
  );
};

export default React.memo(ProfileSettings);
