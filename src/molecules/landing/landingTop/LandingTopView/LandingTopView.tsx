import React from "react";

export type LandingTopViewProps = {
  data: string;
};

const LandingTopView = ({ data }: LandingTopViewProps): JSX.Element => {
  return (
    <div>
      {`LandingTopView: `}
      {data}
    </div>
  );
};

export default LandingTopView;
