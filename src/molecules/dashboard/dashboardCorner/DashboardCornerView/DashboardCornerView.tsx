import React from "react";
import { Link } from "../../../../atoms";
import { paths, useText } from "../../../../utils";

const DashboardCornerView = (): JSX.Element => {
  const text = useText();

  return <Link href={paths.home}>{text("appName")}</Link>;
};

export default DashboardCornerView;
