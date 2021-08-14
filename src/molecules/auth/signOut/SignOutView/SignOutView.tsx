import React from "react";
import { Button } from "../../../../atoms";
import useText from "../../../../utils/translations/useText";

export type SignOutViewProps = {
  onSignOutClicked: () => void;
};

const SignOutView = ({ onSignOutClicked }: SignOutViewProps): JSX.Element => {
  const text = useText();

  return <Button onClick={onSignOutClicked}>{text("signOutButton")}</Button>;
};

export default SignOutView;
