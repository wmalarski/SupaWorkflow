import React from "react";
import { Link } from "../../../../atoms";
import paths from "../../../../utils/routing/paths";
import useText from "../../../../utils/translations/useText";

const AnonHeaderView = (): JSX.Element => {
  const text = useText();

  return (
    <>
      <Link href={paths.signIn}>{text("signInHeader")}</Link>
      <Link href={paths.signUp}>{text("signUpHeader")}</Link>
    </>
  );
};

export default AnonHeaderView;
