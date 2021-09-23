import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { useText } from "utils";
import ThemeButton from "../../../../atoms/ThemeButton/ThemeButton";

export type ProfileHeaderViewProps = {
  onSignOutClicked: () => void;
};

const ProfileHeaderView = ({
  onSignOutClicked,
}: ProfileHeaderViewProps): React.ReactElement => {
  const text = useText();

  return (
    <HStack spacing={3}>
      <ThemeButton />
      <Button variant="link" onClick={onSignOutClicked}>
        {text("signOutButton")}
      </Button>
    </HStack>
  );
};

export default ProfileHeaderView;
