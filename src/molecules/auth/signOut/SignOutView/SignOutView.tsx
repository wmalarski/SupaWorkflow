import { Button } from "@chakra-ui/react";
import React from "react";
import { useText } from "../../../../utils";

export type SignOutViewProps = {
  onSignOutClicked: () => void;
};

const SignOutView = ({ onSignOutClicked }: SignOutViewProps): JSX.Element => {
  const text = useText();

  return <Button onClick={onSignOutClicked}>{text("signOutButton")}</Button>;
};

export default SignOutView;
