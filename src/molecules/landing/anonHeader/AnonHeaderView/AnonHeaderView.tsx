import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const AnonHeaderView = (): JSX.Element => {
  const text = useText();

  return (
    <>
      <Link href={paths.home}>{text("appName")}</Link>
      <Link href={paths.signIn}>{text("signInHeader")}</Link>
      <Link href={paths.signUp}>{text("signUpHeader")}</Link>
    </>
  );
};

export default AnonHeaderView;
