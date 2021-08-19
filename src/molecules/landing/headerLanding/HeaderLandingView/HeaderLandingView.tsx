import React from "react";

export type HeaderLandingViewProps = {
  data: string;
};

const HeaderLandingView = ({ data }: HeaderLandingViewProps): JSX.Element => {
  return (
    <div>
      {`HeaderLandingView: `}
      {data}
    </div>
  );
};

export default HeaderLandingView;
