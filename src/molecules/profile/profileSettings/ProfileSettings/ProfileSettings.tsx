import React from "react";
import { useUpdateProfile } from "../../../../services/data/profile/updateProfile";
import { useProfileContext } from "../../../../utils";
import ProfileSettingsView from "../ProfileSettingsView/ProfileSettingsView";

type ViewProps = React.ComponentProps<typeof ProfileSettingsView>;

export type ProfileSettingsProps = {
  View?: React.ComponentType<ViewProps>;
};

const ProfileSettings = ({
  View = ProfileSettingsView,
}: ProfileSettingsProps): JSX.Element => {
  const profile = useProfileContext();

  const {
    mutate: updateProfile,
    data: newProfile,
    isLoading,
    error,
  } = useUpdateProfile();

  return (
    <View
      isLoading={isLoading}
      profile={profile}
      newProfile={newProfile}
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
