import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import ThemeButton from "../../../../atoms/ThemeButton/ThemeButton";
import { useText } from "../../../../utils";

export type ProfileHeaderViewProps = {
  onSignOutClicked: () => void;
};

const ProfileHeaderView = ({
  onSignOutClicked,
}: ProfileHeaderViewProps): JSX.Element => {
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
