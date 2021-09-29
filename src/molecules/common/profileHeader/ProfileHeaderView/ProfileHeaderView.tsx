import { Button, HStack } from "@chakra-ui/react";
import { ThemeButton } from "atoms";
import React from "react";
import { useText } from "utils";

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
