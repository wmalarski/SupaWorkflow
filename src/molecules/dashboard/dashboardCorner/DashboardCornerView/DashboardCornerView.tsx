import React from "react";
import { Link } from "../../../../atoms";
import paths from "../../../../utils/routing/paths";
import useText from "../../../../utils/translations/useText";

const DashboardCornerView = (): JSX.Element => {
  const text = useText();

  return <Link href={paths.home}>{text("appName")}</Link>;
};

export default DashboardCornerView;
