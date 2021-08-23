import { Button } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";

export type ProfileHeaderViewProps = {
  onSignOutClicked: () => void;
};

const ProfileHeaderView = ({
  onSignOutClicked,
}: ProfileHeaderViewProps): JSX.Element => {
  const text = useText();

  return (
    <Button variant="link" onClick={onSignOutClicked}>
      {text("signOutButton")}
    </Button>
  );
};

export default ProfileHeaderView;
