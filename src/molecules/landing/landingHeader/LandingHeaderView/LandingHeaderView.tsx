import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const LandingHeaderView = (): JSX.Element => {
  const text = useText();

  return (
    <>
      <Link href={paths.home}>{text("appName")}</Link>
      <Link href={paths.organizations}>{text("navigationOrganizations")}</Link>
    </>
  );
};

export default LandingHeaderView;
