import React from "react";
import { Link } from "../../../../atoms";
import paths from "../../../../utils/routing/paths";
import useText from "../../../../utils/translations/useText";

export type HeaderViewProps = {
  right?: React.ReactNode;
};

const HeaderView = ({ right }: HeaderViewProps): JSX.Element => {
  const text = useText();

  return (
    <div>
      <Link href={paths.home}>{text("appName")}</Link>
      {right}
    </div>
  );
};

export default HeaderView;
